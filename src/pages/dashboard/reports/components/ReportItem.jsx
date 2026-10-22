import { ListItemButton, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";

const ReportItem = ({ title, onClick }) => {
  const { t } = useTranslation();
  return (
    <ListItemButton
      sx={{
        textAlign: "right",
        borderRadius: 2,
        transition: "all .2s ease",

        "&:hover": {
          bgcolor: "primary.light",
          color: "primary.contrastText",
          transform: "translateX(-4px)",
        },
      }}
      onClick={onClick}
    >
      <ListItemText primary={t(title)} />
    </ListItemButton>
  );
};

export default ReportItem;
