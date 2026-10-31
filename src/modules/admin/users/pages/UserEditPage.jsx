import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import UserForm from "../components/UserForm";
import useUser from "../hooks/useUser";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";

const UserEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { getUserById, updateUser } = useUser();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await getUserById(id);

      setUser({
        ...data,
        password: "", // فیلد رمز همیشه خالی شروع می‌شه؛ چون در ویرایش استفاده نمی‌شه (isEdit=true آن را مخفی می‌کند)
      });
    };

    loadUser();
  }, [id, getUserById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateUser({ ...values, id });
        navigate("/admin/users");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateUser, navigate],
  );

  if (!user) return null;

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش کاربر")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <UserForm initialValues={user} onSubmit={handleSubmit} isEdit={true} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(UserEditPage);
