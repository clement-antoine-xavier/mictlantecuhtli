import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { navigation } from "../data";

type SurveillanceNavigationProps = {
  onNavigate: () => void;
};

export default function SurveillanceNavigation({ onNavigate }: SurveillanceNavigationProps) {
  return (
    <Box sx={{ height: "100%", bgcolor: "background.paper" }}>
      <Box sx={{ px: 2, py: 3 }}>
        <Box component="h2" sx={{ m: 0, fontSize: 20, fontWeight: 800 }}>
          Mictlantecuhtli
        </Box>
        <Box component="p" sx={{ m: 0, color: "text.secondary", fontSize: 14 }}>
          Animal Mortality Surveillance
        </Box>
      </Box>
      <Divider />
      <List sx={{ p: 1 }}>
        {navigation.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton selected={item === "Overview"} sx={{ borderRadius: 1, mb: 0.5 }} onClick={onNavigate}>
              <ListItemAvatar sx={{ minWidth: 36 }}>
                <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>{item.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
