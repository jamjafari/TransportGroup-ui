import React, { memo, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppFileUpload,
  AppButton,
} from '@/components';
import { formatJalaliDate } from '@/utils';

import { attachmentCategoryOptions } from '../constants';
import useAttachments from '@/hooks/useAttachments';
import { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';

const emptyDraft = {
  category: '',
  issueDate: null,
  expiryDate: null,
  file: null,
};

const VendorDocumentSection = ({ vendorId }) => {
  const { attachments, loading, addAttachment, removeAttachment } =
    useAttachments(ATTACHMENT_OWNER_TYPE.VENDOR, vendorId);

  const [draft, setDraft] = useState(emptyDraft);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (event) => {
    setDraft((prev) => ({ ...prev, file: event.target.files?.[0] ?? null }));
  };

  const handleAdd = async () => {
    if (!draft.file || !draft.category) return;

    setSubmitting(true);

    try {
      await addAttachment(draft);
      setDraft(emptyDraft);
    } finally {
      setSubmitting(false);
    }
  };

  const categoryLabel = (value) =>
    attachmentCategoryOptions.find((option) => option.value === value)?.label ??
    '';

  return (
    <AppFormSection title="تصاویر ">
      <Grid container spacing={2} alignItems="flex-end">
        <Grid size={{ xs: 12, md: 4 }}>
          <AppSelectform
            fullWidth
            label=" محل تصویر"
            name="category"
            value={draft.category}
            options={attachmentCategoryOptions}
            onChange={(value) =>
              setDraft((prev) => ({ ...prev, category: value }))
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <AppJalaliDatePicker
            label="تاریخ تصویر"
            value={draft.issueDate}
            onChange={(value) =>
              setDraft((prev) => ({ ...prev, issueDate: value }))
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 2 }}>
          <AppFileUpload
            label="فایل"
            value={draft.file}
            onChange={handleFileChange}
          />
        </Grid>
      </Grid>

      <Box mt={2}>
        <AppButton
          onClick={handleAdd}
          disabled={submitting || !draft.file || !draft.category}
        >
          افزودن تصویر
        </AppButton>
      </Box>

      <List sx={{ mt: 2 }}>
        {attachments.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => removeAttachment(item.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={item.originalFileName}
              secondary={`${categoryLabel(item.category)} — تصویر: ${formatJalaliDate(item.issueDate ?? '—')}`}
            />
          </ListItem>
        ))}

        {!loading && attachments.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            هیچ مدرکی ثبت نشده است.
          </Typography>
        )}
      </List>
    </AppFormSection>
  );
};

export default memo(VendorDocumentSection);
