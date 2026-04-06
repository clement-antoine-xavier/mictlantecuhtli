import { Container, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("loading");

  return (
    <Container maxWidth="sm" sx={{ py: 12 }}>
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={700}>
          {t("title")}
        </Typography>
        <Typography color="text.secondary">{t("description")}</Typography>
      </Stack>
    </Container>
  );
}
