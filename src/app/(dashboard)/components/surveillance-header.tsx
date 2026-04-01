import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";

type SurveillanceHeaderProps = {
  onOpenMobileDrawer: () => void;
};

export default function SurveillanceHeader({ onOpenMobileDrawer }: SurveillanceHeaderProps) {
  return (
    <Paper
      square
      elevation={0}
      sx={{
        px: { xs: 2, md: 4 },
        py: 2,
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Button
            variant="outlined"
            size="small"
            onClick={onOpenMobileDrawer}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            Menu
          </Button>
          <Box>
            <Typography variant="h4" fontWeight={700}>
              Surveillance Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monitor mortality indicators, anomaly signals, and data quality in near real time.
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" sx={{ display: { xs: "none", sm: "inline-flex" } }}>
            Export
          </Button>
          <Button variant="contained">Generate Bulletin</Button>
          <Avatar sx={{ width: 32, height: 32 }}>TH</Avatar>
        </Stack>
      </Stack>
    </Paper>
  );
}
