import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

const DashboardSearchButton = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Button variant="outlined" startIcon={<FilterAltIcon />} onClick={onClick}>
      {t("جستجو")}
    </Button>
  );
};

export default DashboardSearchButton;
