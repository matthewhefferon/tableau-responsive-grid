import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import "../styles/Grid.css"

const dashboards = [
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-1",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-2",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-3",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-4",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-5",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-6",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-7",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-8",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-9",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-10",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-11",
  "https://public.tableau.com/views/SocialMediaKPIsDarkTheme/KPI-12",
];

function Grid() {
  return (
    <div className="grid">
      {dashboards.map((dashboard) => (
        <Card key={uuidv4()} dashboard={dashboard} />
      ))}
    </div>
  );
}

export default Grid;
