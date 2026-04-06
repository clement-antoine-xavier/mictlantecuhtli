"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  const t = useTranslations("error");

  return (
    <Container maxWidth="sm" sx={{ py: 12 }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h4" fontWeight={700}>
          {t("title")}
        </Typography>
        <Typography color="text.secondary">{t("description")}</Typography>
        <Button variant="contained" onClick={reset}>
          {t("retry")}
        </Button>
      </Stack>
    </Container>
  );
}
