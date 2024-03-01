import React from "react";
import { Link } from "react-router-dom";
import TaskListContainer from "../containers/TaskList";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <h1>HOME</h1>
      <main>
        <TaskListContainer />
      </main>
    </div>
  );
}
