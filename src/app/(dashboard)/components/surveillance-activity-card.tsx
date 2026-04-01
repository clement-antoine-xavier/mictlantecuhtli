import { Avatar, Card, CardContent, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

import { surveillanceActivities } from "../data";

export default function SurveillanceActivityCard() {
  return (
    <Grid size={{ xs: 12, md: 5 }}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Surveillance Activity
          </Typography>
          <List disablePadding>
            {surveillanceActivities.map((item, index) => (
              <ListItem key={item} disableGutters sx={{ py: 1 }}>
                <ListItemAvatar sx={{ minWidth: 42 }}>
                  <Avatar sx={{ width: 28, height: 28 }}>{index + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} secondary={`Today at ${9 + index}:2${index} AM`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
}
