import React from "react";

const ProjectCard = props => {
  return (
    <div className="projectCard">
      <div className="projectHeader">
        <h2 className="projHead"><span className="heading">Project Title:</span>{props.title}</h2>
        
        <h2 className="projHead">
        <span className="heading">Lead Organization:</span>{props.leadOrganization}
          <span>({props.orgAcronym})</span>
        </h2>
        <h4 className="projHead1">
        <span className="heading">City:</span>{props.city}, {props.state}
        </h4>
        <h3 className="projHead2"><span className="heading">Project Status:</span>{props.status}</h3>
        <h3 className="projHead2">
        <span className="heading">Project Lenght:</span>{props.startDate}-{props.endDate}{" "}
        </h3>
      </div>
      <div className="projectText">
        <p><span className="projectHeading">Project Description:</span> {props.description}</p>
        <br />
        <p><span className="projectHeading">Project Benefits:</span> {props.benefits}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
