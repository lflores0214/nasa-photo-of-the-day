import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { tsPropertySignature } from "@babel/types";

const ProjectContainer = () => {
  const [project, setProject] = useState([]);
  const [organization, setOrganization] = useState([])

  useEffect(() => {
      axios
          .get (`https://api.nasa.gov/techport/api/projects/17792?api_key=OKgjmkAGgXKQKcEkyxClfuzc9MXbTWJWJOZQ0Jqa`)
          .then(response => {
              console.log(response.data.project.leadOrganization)
              setProject(response.data.project)
              setOrganization(response.data.project.leadOrganization)

          })
          .catch(error => {
              console.log("Uh-Oh",error)
          })
  }, []);

  return (
    <div className="container">
      <ProjectCard
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
      />
    </div>
  );
};
export default ProjectContainer;
