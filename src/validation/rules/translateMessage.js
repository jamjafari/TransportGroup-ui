import i18n from '@/i18n';

// ✅ پیام‌های اعتبارسنجی هم «کلید طبیعی» هستند: خودِ متن فارسی کلید ترجمه است (مثل بقیه‌ی برنامه).
//
//   required('شماره پلاک الزامی است')  →  انگلیسی: 'Plate number is required'
//
// قانون‌ها می‌توانند رشته برگردانند یا { message, params } برای پیام‌های دارای {{min}} و مانند آن.
// فاصله‌های اضافه‌ی ابتدا، انتها و میانِ پیام‌های schema ها یکسان می‌شوند تا کلیدهای en.json تمیز بمانند.
const normalize = (text) => text.trim().replace(/\s+/g, ' ');

const translateMessage = (error) => {
  if (!error) return error;

  if (typeof error === 'string') return i18n.t(normalize(error));

  return i18n.t(normalize(error.message), error.params);
};

export default translateMessage;
