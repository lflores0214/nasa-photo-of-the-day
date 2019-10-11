import React from "react";
import { FooterStyle, Link } from "./StyleComponents";

const Footer = () => {
  return (
    <FooterStyle>
      <p>
        Created By: <Link href="https://luisflores0214.com/">Luis Flores</Link>
      </p>
      <p>|</p>
      <p>
        {" "}
        APIs used: <Link href="https://api.nasa.gov/">Nasa API</Link>
      </p>
    </FooterStyle>
  );
};

export default Footer;
