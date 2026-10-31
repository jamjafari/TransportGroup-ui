import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Document Assistant API  (/document-assistant)
|--------------------------------------------------------------------------
| GET  /document-types   انواع سند و فیلدهای هرکدام
| POST /analyze          (multipart: file) خواندن سند و پیشنهاد مقادیر
| POST /feedback         { analysisId, documentType, fields } مقادیر نهایی کاربر
*/

const BASE_URL = '/document-assistant';

// خواندن محلی تا ~۲۰ ثانیه و خواندن ابری تا ~۹۰ ثانیه طول می‌کشد (پیش‌فرض axios ۳۰ ثانیه است)
const READ_TIMEOUT_MS = 180 * 1000;

export const getDocumentTypes = () => apiClient.get(`${BASE_URL}/document-types`);

export const analyzeDocument = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return apiClient.post(`${BASE_URL}/analyze`, formData, {
    config: { timeout: READ_TIMEOUT_MS },
  });
};

export const sendFeedback = ({ analysisId, documentType, fields }) =>
  apiClient.post(`${BASE_URL}/feedback`, { analysisId, documentType, fields });
