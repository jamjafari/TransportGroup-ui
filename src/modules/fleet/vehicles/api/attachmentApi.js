// modules/fleet/vehicles/api/attachmentApi.js
// نکته: چون Attachment حالا polymorphic و مشترک بین همه ماژول‌هاست،
// پیشنهاد می‌کنم این فایل رو به یک مسیر مشترک‌تر (مثلاً src/api/attachmentApi.js) منتقل کنید.

import axiosClient from '@/core/http/axiosClient';

const BASE_URL = '/attachments';

export const getAttachments = async (ownerType, ownerId) => {
  const { data } = await axiosClient.get(BASE_URL, {
    params: { ownerType, ownerId },
  });
  return data;
};

export const uploadAttachment = async ({
  ownerType,
  ownerId,
  category,
  issueDate,
  expiryDate,
  file,
}) => {
  const formData = new FormData();

  formData.append('ownerType', ownerType);
  formData.append('ownerId', ownerId);
  formData.append('category', category);

  if (issueDate) formData.append('issueDate', issueDate);
  if (expiryDate) formData.append('expiryDate', expiryDate);

  formData.append('file', file);

  const { data } = await axiosClient.post(BASE_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};

export const deleteAttachment = async (id) => {
  const { data } = await axiosClient.delete(`${BASE_URL}/${id}`);
  return data;
};
