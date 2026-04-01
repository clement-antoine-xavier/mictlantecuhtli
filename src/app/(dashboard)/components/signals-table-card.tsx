import { Card, CardContent, Chip, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import { signals } from "../data";

export default function SignalsTableCard() {
  return (
    <Grid size={{ xs: 12, md: 7 }}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Latest Signals
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Signal ID</TableCell>
                <TableCell>Species</TableCell>
                <TableCell>Region</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {signals.map((signal) => (
                <TableRow key={signal.id} hover>
                  <TableCell>{signal.id}</TableCell>
                  <TableCell>{signal.species}</TableCell>
                  <TableCell>{signal.region}</TableCell>
                  <TableCell align="right">
                    <Chip
                      label={signal.status}
                      size="small"
                      color={
                        signal.status === "Validated"
                          ? "success"
                          : signal.status === "Pending Review"
                            ? "warning"
                            : signal.status === "High Risk"
                              ? "error"
                              : "default"
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
}
