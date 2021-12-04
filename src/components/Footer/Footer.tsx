import React from "react";
import { FooterContainer } from "./Footerstyle";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Developed By{" "}
        <a href="https://www.linkedin.com/in/nemcsok-tamas/" target="blank">
          Tamás Nemcsok
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
