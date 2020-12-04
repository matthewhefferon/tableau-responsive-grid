import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import "../styles/Grid.css"

const dashboards = [
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi1",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi2",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi3",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi4",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi5",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi6",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi7",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi8",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi9",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi10",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi11",
  "https://10ax.online.tableau.com/t/viztipdev934611/views/SocialMediaKPIs/kpi12",
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
