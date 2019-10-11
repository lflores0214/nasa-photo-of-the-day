import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  const [project, setProject] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [idNum, setIdNum] = useState(17792);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/techport/api/projects/${idNum}?api_key=OKgjmkAGgXKQKcEkyxClfuzc9MXbTWJWJOZQ0Jqa`
      )
      .then(response => {
        console.log(response.data.project);
        setProject(response.data.project);
        setOrganization(response.data.project.leadOrganization);
      })
      .catch(error => {
        console.log("Uh-Oh", error);
      });
  }, [idNum]);

  return (
    <div className="container">
      <ProjectCard
        idNum={idNum}
        setIdNum={setIdNum}
        title={project.title}
        status={project.status}
        startDate={project.startDate}
        endDate={project.endDate}
        leadOrganization={organization.name}
        orgAcronym={organization.acronym}
        city={organization.city}
        state={organization.state}
        description={project.description}
        benefits={project.benefits}
        id={project.id}
      />
    </div>
  );
};
export default ProjectContainer;
