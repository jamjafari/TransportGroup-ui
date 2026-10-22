import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import useDashboardRefresh from "./useDashboardRefresh";

const useDashboardWidget = ({ title = "", subtitle = "", fetcher }) => {
  const { t } = useTranslation();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { refreshKey } = useDashboardRefresh();

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetcher();
      setRows(result ?? []);
    } catch (error) {
      setRows([]);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [refreshKey]);

  return {
    title: title ? t(title) : "",
    subtitle: subtitle ? t(subtitle) : "",
    rows,
    loading,
    error,
    refresh: loadData,
  };
};

export default useDashboardWidget;
