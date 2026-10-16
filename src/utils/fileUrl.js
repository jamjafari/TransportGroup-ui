const API_ORIGIN = import.meta.env.VITE_API_ORIGIN || 'http://localhost:5119';

export const getFileUrl = (url) => {
  if (!url) return '';

  // اگر URL کامل باشد، همان را برگردان
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  // اگر URL نسبی باشد، به Backend متصل کن
  return `${API_ORIGIN}${url.startsWith('/') ? url : `/${url}`}`;
};

export default getFileUrl;
