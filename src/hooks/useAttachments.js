// src/hooks/useAttachments.js

import { useCallback, useEffect, useState } from 'react';

import * as attachmentApi from '@/api/attachmentApi';

/**
 * هوک عمومی برای مدیریت مدارک هر نوع موجودیت (خودرو، راننده، و ...).
 * @param {number} ownerType - یکی از مقادیر ATTACHMENT_OWNER_TYPE
 * @param {number|string} ownerId
 */
const useAttachments = (ownerType, ownerId) => {
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAttachments = useCallback(async () => {
    if (!ownerId) return;

    setLoading(true);

    try {
      const data = await attachmentApi.getAttachments(ownerType, ownerId);
      setAttachments(data);
    } finally {
      setLoading(false);
    }
  }, [ownerType, ownerId]);

  useEffect(() => {
    loadAttachments();
  }, [loadAttachments]);

  const addAttachment = useCallback(
    async ({ category, issueDate, expiryDate, file }) => {
      await attachmentApi.uploadAttachment({
        ownerType,
        ownerId,
        category,
        issueDate,
        expiryDate,
        file,
      });
      await loadAttachments();
    },
    [ownerType, ownerId, loadAttachments],
  );

  const removeAttachment = useCallback(
    async (id) => {
      await attachmentApi.deleteAttachment(id);
      await loadAttachments();
    },
    [loadAttachments],
  );

  return { attachments, loading, addAttachment, removeAttachment };
};

export default useAttachments;
