/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectLists";
import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h2> {project.name}</h2>
      <img src={project.image}/>
      <p>
        <b>Skills:</b> {project.Skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
