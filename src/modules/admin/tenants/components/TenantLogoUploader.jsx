import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import EditIcon from '@mui/icons-material/Edit';

import { AppAvatar } from '@/components';
import { getFileUrl } from '@/utils';
import * as attachmentApi from '@/api/attachmentApi';

import {
  ATTACHMENT_OWNER_TYPE,
  ATTACHMENT_CATEGORY,
} from '../constants/attachmentOwnerType';

const TenantLogoUploader = ({ tenantId, tenantName }) => {
  const inputRef = useRef(null);

  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadLogo = useCallback(async () => {
    try {
      const items = await attachmentApi.getAttachments(
        ATTACHMENT_OWNER_TYPE.Tenant,
        tenantId,
      );

      const latest = items?.data?.[0] ?? items?.[0] ?? null;
      setLogo(latest);
    } catch {
      setLogo(null);
    }
  }, [tenantId]);

  useEffect(() => {
    if (tenantId) {
      loadLogo();
    }
  }, [tenantId, loadLogo]);

  const handleFileSelect = useCallback(
    async (event) => {
      const file = event.target.files?.[0];
      event.target.value = ''; // امکان انتخاب دوباره‌ی همون فایل رو فراهم می‌کنه

      if (!file) return;

      setError('');
      setLoading(true);

      try {
        // چون لوگو باید همیشه یکی باشه، اول لوگوی قبلی (اگه بود) حذف می‌شه
        if (logo?.id) {
          await attachmentApi.deleteAttachment(logo.id);
        }

        await attachmentApi.uploadAttachment({
          ownerType: ATTACHMENT_OWNER_TYPE.Tenant,
          ownerId: tenantId,
          category: ATTACHMENT_CATEGORY.Photo,
          file,
        });

        await loadLogo();
      } catch (err) {
        console.error('Logo upload error:', err);
        setError('خطا در آپلود لوگو');
      } finally {
        setLoading(false);
      }
    },
    [logo, tenantId, loadLogo],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <AppAvatar
          src={logo ? getFileUrl(logo.url) : undefined}
          name={tenantName}
          size={96}
        />

        <IconButton
          size="small"
          onClick={() => inputRef.current?.click()}
          disabled={loading}
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            bgcolor: 'background.paper',
            boxShadow: 1,
            '&:hover': { bgcolor: 'background.paper' },
          }}
        >
          {loading ? (
            <CircularProgress size={16} />
          ) : (
            <EditIcon fontSize="small" />
          )}
        </IconButton>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileSelect}
        />
      </Box>

      {error && (
        <Alert severity="error" sx={{ py: 0 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default memo(TenantLogoUploader);
