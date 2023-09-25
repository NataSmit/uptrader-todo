import React from "react";
import { projects } from "../../data/data";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <Link to={`/taskboard/${project.id}`} key={project.id}>
            <li>{project.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
