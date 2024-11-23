import React from "react";
import { BreadcrumbNav } from "../styles/BreadcrumbStyles";

const Breadcrumb = () => (
  <BreadcrumbNav>
    <span>Home</span> &gt; &gt;
    <span>Verbal Reasoning</span> &gt; &gt;
    <span className="active">List of Topics</span>
  </BreadcrumbNav>
);

export default Breadcrumb;
