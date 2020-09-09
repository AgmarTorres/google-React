import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>This is HomePage</h1>
      <div className="home__header">
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>
      <div className="home__body">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Image</Link>
      </div>
    </div>
  );
}

export default Home;
