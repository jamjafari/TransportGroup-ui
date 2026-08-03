import { useCallback, useEffect, useState } from 'react';

import * as attachmentApi from '../api/attachmentApi';
import { ATTACHMENT_OWNER_TYPE } from '../constants';

const useVehicleAttachments = (vehicleId) => {
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAttachments = useCallback(async () => {
    if (!vehicleId) return;

    setLoading(true);

    try {
      const data = await attachmentApi.getAttachments(
        ATTACHMENT_OWNER_TYPE.VEHICLE,
        vehicleId,
      );
      setAttachments(data);
    } finally {
      setLoading(false);
    }
  }, [vehicleId]);

  useEffect(() => {
    loadAttachments();
  }, [loadAttachments]);

  const addAttachment = useCallback(
    async ({ category, issueDate, expiryDate, file }) => {
      await attachmentApi.uploadAttachment({
        ownerType: ATTACHMENT_OWNER_TYPE.VEHICLE,
        ownerId: vehicleId,
        category,
        issueDate,
        expiryDate,
        file,
      });

      await loadAttachments();
    },
    [vehicleId, loadAttachments],
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

export default useVehicleAttachments;
