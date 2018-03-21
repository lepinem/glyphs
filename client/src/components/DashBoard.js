// Dashboard.js

import React from "react";
import { Link } from "react-router-dom";
import WineList from "./WineList";

const DashBoard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Restaurant Glyphs</h1>
      <WineList />
    </div>
  );
};

export default DashBoard;
