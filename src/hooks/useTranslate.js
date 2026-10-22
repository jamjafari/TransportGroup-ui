import { useTranslation } from "react-i18next";

const useTranslate = (namespace) => {
  const { t, i18n, ready } = useTranslation(namespace);

  return {
    t,
    language: i18n.resolvedLanguage || i18n.language,
    isRTL: (i18n.resolvedLanguage || i18n.language) === "fa",
    ready,
  };
};

export default useTranslate;
