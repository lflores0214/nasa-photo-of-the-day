import React from "react";
import styled from "styled-components";

export const Card = styled.div`
  width: 90%;
  margin-left: 5%;
  line-height: 1.5;
  font-size: 1.2rem;
  background-color: #97bbc7;
  -webkit-box-shadow: -1px 1px 5px 9px #1c2f60;
  -moz-box-shadow: -1px 1px 5px 9px #1c2f60;
  box-shadow: -1px 1px 5px 9px #1c2f60;
`;

export const Header = styled.div`
  background-color: #97bbc7;
  font-family: "contrail one", sans-serif;
  padding-top: 2%;
`;

export const Text = styled.p`
  text-align: justify;
  width: 95%;
  margin-left: 2%;
  padding-bottom: 5%;
  font-family: "space mono", monospace;
`;

export const ImgCard = styled.img`
  width: 90%;
  margin-top: 2%;
  margin-bottom: 1.5%;
  -webkit-box-shadow: -1px 1px 5px 9px #5e8896;
  -moz-box-shadow: -1px 1px 5px 9px #5e8896;
  box-shadow: -1px 1px 5px 9px #5e8896;
`;

export const Heading = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "contrail one", sans-serif;
  text-decoration: underline;
  margin-bottom: 0.5%;

  ${props =>
    props.type === "bigger"
      ? `font-size: 2rem;
  text-transform: uppercase; 
  padding-top:2%`
      : null}
`;
export const HeadingSpan = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "contrail one", sans-serif;
  text-decoration: underline;
  margin-bottom: 0.5%;
`;

export const ProjectHeader = styled.div`
  margin: 0 0 5% 2%;
  padding-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: "contrail one", sans seriff;
`;

export const FooterStyle = styled.footer`
  width: 80%;
  margin-left: 10%;
  display: flex;
  justify-content: space-around;
  background-color: #97bbc7;
  font-size: 1.4rem;
  padding: 2% 0 1% 0;
  -webkit-box-shadow: -1px 1px 5px 9px #1c2f60;
  -moz-box-shadow: -1px 1px 5px 9px #1c2f60;
  box-shadow: -1px 1px 5px 9px #1c2f60;
  font-family: "contrail one", sans-serif;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #303b5b;
  &:hover {
    color: firebrick;
  }
`;

export const ProjectH1 = styled.h1`
  text-align: center;
  padding-top: 2%;
  font-size: 1.6rem;
  text-decoration: underline;
  text-transform: uppercase;
  font-family: "contrail one", sans-serif;
`;
