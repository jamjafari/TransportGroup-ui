import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { prepareExportData } from './exportUtils';
import { VazirFontBase64 } from '@/assets/fonts/vazirFont';
import { VazirFontBoldBase64 } from '@/assets/fonts/vazirFontBold';
import { formatJalaliDate } from '@/utils';
import { getFileUrl } from '@/utils';

const isDateLike = (value) => {
  if (value instanceof Date) return true;
  if (
    typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?Z?)?$/.test(value)
  ) {
    return true;
  }
  return false;
};

const formatCellValue = (value) =>
  isDateLike(value) ? formatJalaliDate(value) : value;

const toPersianDisplay = (text, doc) => {
  if (text == null) return '';
  const str = String(text);
  const hasPersianChar = /[\u0600-\u06FF]/.test(str);
  if (!hasPersianChar) return str;
  return doc.processArabic(str);
};

const registerPersianFont = (doc) => {
  doc.addFileToVFS('Vazirmatn-Regular.ttf', VazirFontBase64);
  doc.addFont('Vazirmatn-Regular.ttf', 'Vazir', 'normal');
  doc.addFileToVFS('Vazirmatn-Bold.ttf', VazirFontBoldBase64);
  doc.addFont('Vazirmatn-Bold.ttf', 'Vazir', 'bold');
  doc.setFont('Vazir');
};

// ✅ چون بارگذاری تصویر async است، لوگو را قبل از ساخت PDF به Base64 تبدیل می‌کنیم
const loadImageAsDataUrl = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      })
      .catch(reject);
  });

// ⚠️ نکته مهم: چون بارگذاری لوگو async است، این تابع حالا async شده — نحوه‌ی صدا زدنش باید با await باشد
export const exportToPdf = async ({
  rows,
  columns,
  fileName = 'report.pdf',
  tenant,
}) => {
  const doc = new jsPDF();
  registerPersianFont(doc);

  let logoDataUrl = null;
  if (tenant?.logoUrl) {
    console.log('در حال بارگذاری لوگو از:', getFileUrl(tenant.logoUrl)); // ✅ اضافه شد
    try {
      logoDataUrl = await loadImageAsDataUrl(getFileUrl(tenant.logoUrl));
      console.log('لوگو با موفقیت بارگذاری شد'); // ✅ اضافه شد
    } catch (err) {
      console.error('خطا در بارگذاری لوگو:', err); // ✅ اضافه شد — قبلاً بی‌صدا بود
      logoDataUrl = null;
    }
  } else {
    console.log('tenant.logoUrl خالی/موجود نیست. مقدار tenant:', tenant); // ✅ اضافه شد
  }

  const rtlColumns = [...columns].reverse();
  const data = prepareExportData({ rows, columns: rtlColumns });
  const tableHead = [
    rtlColumns.map((c) => toPersianDisplay(c.headerName, doc)),
  ];
  const tableBody = data.map((row) =>
    Object.values(row).map((value) =>
      toPersianDisplay(formatCellValue(value), doc),
    ),
  );

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const drawHeader = () => {
    let y = 14;

    if (logoDataUrl) {
      const logoSize = 14;
      doc.addImage(
        logoDataUrl,
        'PNG',
        pageWidth / 2 - logoSize / 2,
        8,
        logoSize,
        logoSize,
      );
      y = 8 + logoSize + 6;
    }

    if (tenant?.name) {
      doc.setFont('Vazir', 'bold');
      doc.setFontSize(13);
      doc.text(toPersianDisplay(tenant.name, doc), pageWidth / 2, y, {
        align: 'center',
      });
    }
  };

  const drawFooter = () => {
    const footerRaw = `توجه: این گزارش متعلق به سازمان/شرکت "${tenant?.name || ''}" است و هر گونه سوء استفاده از آن پیگرد قانونی دارد`;
    doc.setFont('Vazir', 'normal');
    doc.setFontSize(7);
    doc.text(toPersianDisplay(footerRaw, doc), pageWidth / 2, pageHeight - 8, {
      align: 'center',
    });
  };

  autoTable(doc, {
    head: tableHead,
    body: tableBody,
    theme: 'grid',
    startY: tenant ? 35 : undefined, // فضای کافی برای هدر (لوگو + نام) در صفحه‌ی اول
    styles: { font: 'Vazir', halign: 'right' },
    headStyles: { font: 'Vazir', fontStyle: 'bold', halign: 'right' },
    didDrawPage: () => {
      // ✅ روی هر صفحه (نه فقط صفحه‌ی اول) تکرار می‌شود
      drawHeader();
      drawFooter();
    },
  });

  doc.save(fileName);
};
