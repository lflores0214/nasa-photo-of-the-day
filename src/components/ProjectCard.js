import React from "react";
import {
  Card,
  Heading,
  ProjectHeader,
  HeadingSpan,
  Text
} from "./StyleComponents";

const ProjectCard = props => {
  return (
    <Card>
      <Heading type="bigger" className="projects">
        Nasa projects
      </Heading>
      <ProjectHeader>
        <h2 className="projHead">
          <HeadingSpan>Project Title:</HeadingSpan>
          {props.title}
        </h2>

        <h2 className="projHead">
          <HeadingSpan>Lead Organization:</HeadingSpan>
          {props.leadOrganization}
          <span>({props.orgAcronym})</span>
        </h2>
        <h4 className="projHead2">
          <HeadingSpan>City:</HeadingSpan>
          {props.city}, {props.state}
        </h4>
        <h3 className="projHead2">
          <HeadingSpan>Project Status:</HeadingSpan>
          {props.status}
        </h3>
        <h3 className="projHead2">
          <HeadingSpan>Project Lenght:</HeadingSpan>
          {props.startDate}-{props.endDate}{" "}
        </h3>
        <h3 className="projHead2">
          <HeadingSpan>Project id:</HeadingSpan>
          {props.id}
        </h3>
        <h3 className="projHead2">
          <HeadingSpan>Change Project: </HeadingSpan>
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
      </ProjectHeader>
      <div className="projectText">
        <Text>
          <HeadingSpan>Project Description:</HeadingSpan> {props.description}
        </Text>
        <br />
        <Text>
          <HeadingSpan>Project Benefits:</HeadingSpan> {props.benefits}
        </Text>
      </div>
    </Card>
  );
};

export default ProjectCard;
