// src/api/attachmentApi.js

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

  if (issueDate)
    formData.append('issueDate', new Date(issueDate).toISOString());
  if (expiryDate)
    formData.append('expiryDate', new Date(expiryDate).toISOString());

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
