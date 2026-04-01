import { Box, Button, Card, CardContent, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material";

import { pipelineTasks } from "../data";

export default function PipelineTasksCard() {
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Pipeline Tasks
          </Typography>
          <Stack spacing={2}>
            {pipelineTasks.map((task) => (
              <Box key={task.name}>
                <Stack direction="row" justifyContent="space-between" mb={0.5}>
                  <Typography variant="body2">{task.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {task.progress}%
                  </Typography>
                </Stack>
                <LinearProgress variant="determinate" value={task.progress} />
              </Box>
            ))}
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Button fullWidth variant="outlined">
            Open processing queue
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
