import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <h1>HOME</h1>
    </div>
  );
}
