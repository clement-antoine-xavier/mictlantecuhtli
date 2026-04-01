export const drawerWidth = 260;

export const navigation = [
  "Overview",
  "Data Integration",
  "Mortality Records",
  "Indicators",
  "Alerts",
  "Modeling",
  "Settings",
];

export const surveillanceKpis = [
  { label: "Mortality Rate", value: "2.41%", delta: "+0.3%", color: "warning" as const },
  { label: "Reported Deaths", value: "1,284", delta: "+6.9%", color: "primary" as const },
  { label: "Open Alerts", value: "37", delta: "-4.8%", color: "success" as const },
  { label: "Data Completeness", value: "96.2%", delta: "+1.1%", color: "success" as const },
];

export const mortalityTrendHeights = [42, 58, 51, 74, 64, 86, 79, 92, 88, 95, 90, 98];

export const pipelineTasks = [
  { name: "Validate BDNI daily import", progress: 90 },
  { name: "Run weekly anomaly detection", progress: 68 },
  { name: "Review SIGAL/RESYTAL outliers", progress: 42 },
  { name: "Update species metadata mapping", progress: 28 },
];

export const surveillanceActivities = [
  "Bovine mortality cluster detected in Nouvelle-Aquitaine",
  "Nightly ETL completed for BDNI and SPE sources",
  "2 alerts escalated to epidemiologist review",
  "Regional dashboard cache refreshed successfully",
];

export const signals = [
  { id: "SIG-4821", species: "Cattle", region: "Occitanie", status: "Validated" },
  { id: "SIG-4819", species: "Poultry", region: "Bretagne", status: "Pending Review" },
  { id: "SIG-4815", species: "Swine", region: "Pays de la Loire", status: "High Risk" },
  { id: "SIG-4808", species: "Sheep", region: "Grand Est", status: "Closed" },
  { id: "SIG-4802", species: "Goats", region: "Normandie", status: "Validated" },
];
