import React from "react";
import { FooterContainer, FooterLink, Icon } from "../styles/styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterLink href="#">
        <Icon>⏰</Icon> Take an Online Verbal Reasoning Test Now!
      </FooterLink>
    </FooterContainer>
  );
}

export default Footer;
