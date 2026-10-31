import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Fab } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import { useAuth } from '@/hooks';

import { ALL_SECTION_MODULES } from '../constants/sections';

import DocumentAssistantDialog from './DocumentAssistantDialog';

// ✅ دکمه‌ی «دستیار هوش مصنوعی» کنار «درخواست خودرو» (جایگاه ثابت را MainLayout می‌دهد).
// فقط برای کاربرانی که حداقل یکی از بخش‌های دارای سند را ویرایش می‌کنند؛ سوپرادمین آن را نمی‌بیند
// (سند همیشه به رکوردی از یک سازمان پیوست می‌شود). سرور هم همین را بررسی می‌کند.
const DocumentAssistantFab = () => {
  const { t } = useTranslation();
  const { can } = useAuth();
  const [open, setOpen] = useState(false);

  const visible =
    !can('Tenant.ManageAll') && ALL_SECTION_MODULES.some((m) => can(`${m}.Create`) || can(`${m}.Edit`));

  if (!visible) {
    return null;
  }

  return (
    <>
      <Fab
        variant="extended"
        color="secondary"
        onClick={() => setOpen(true)}
        aria-label={t('دستیار هوش مصنوعی')}
        sx={{ gap: 1 }}
      >
        <AutoAwesomeIcon />
        {t('دستیار هوش مصنوعی')}
      </Fab>

      <DocumentAssistantDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default memo(DocumentAssistantFab);
