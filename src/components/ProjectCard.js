import React from "react";

const ProjectCard = props => {
  return (
    <div className="projectCard">
        <h1 className="projects">Nasa projects</h1>
      <div className="projectHeader">
        
        <h2 className="projHead">
          <span className="heading">Project Title:</span>
          {props.title}
        </h2>

        <h2 className="projHead">
          <span className="heading">Lead Organization:</span>
          {props.leadOrganization}
          <span>({props.orgAcronym})</span>
        </h2>
        <h4 className="projHead1">
          <span className="heading">City:</span>
          {props.city}, {props.state}
        </h4>
        <h3 className="projHead2">
          <span className="heading">Project Status:</span>
          {props.status}
        </h3>
        <h3 className="projHead2">
          <span className="heading">Project Lenght:</span>
          {props.startDate}-{props.endDate}{" "}
        </h3>
        <h3 className="projHead2">
          <span className="heading">Project id:</span>
          {props.id}
        </h3>
        <h3 className="projHead2">
          <span className="heading">Change Project: </span>
          <input
            className="idPicker"
            type="number"
            onChange={e => {
              props.setIdNum(e.target.value);
              if (e.target.value === "") {
                alert("you must enter a number");
                props.setIdNum(props.idNum);
              }
            }}
          />
        </h3>
      </div>
      <div className="projectText">
        <p>
          <span className="projectHeading">Project Description:</span>{" "}
          {props.description}
        </p>
        <br />
        <p>
          <span className="projectHeading">Project Benefits:</span>{" "}
          {props.benefits}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
