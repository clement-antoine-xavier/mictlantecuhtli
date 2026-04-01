import { Grid } from "@mui/material";

import MortalityTrendCard from "./components/mortality-trend-card";
import PipelineTasksCard from "./components/pipeline-tasks-card";
import SignalsTableCard from "./components/signals-table-card";
import SurveillanceActivityCard from "./components/surveillance-activity-card";
import SurveillanceKpiGrid from "./components/surveillance-kpi-grid";

export default function Page() {
  return (
    <Grid container spacing={2}>
      <SurveillanceKpiGrid />
      <MortalityTrendCard />
      <PipelineTasksCard />
      <SurveillanceActivityCard />
      <SignalsTableCard />
    </Grid>
  );
}