import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>My 2025 Habits</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
