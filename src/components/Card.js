import React, { useRef, useEffect } from "react";
import "../styles/Card.css"

// Get Tableau Library from the Window object
const { tableau } = window;

function Card({ dashboard }) {
  const ref = useRef(null);

  useEffect(() => {
    const viz = new tableau.Viz(ref.current, `${dashboard}`, {
      hideTabs: true,
      hideToolbar: true,
      width: "290px",
      height: "180px",
    });

    return viz;
  });

  return <div className="card" ref={ref} />;
}

export default Card;
