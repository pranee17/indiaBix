import React from "react";
import { Link } from "react-router-dom"; // Use Link for routing
import { BreadcrumbNav } from "../../styles/styled-components";

const Breadcrumb = ({ currentTopic, section, page, totalPages }) => {
  return (
    <BreadcrumbNav>
      <span>
        <Link to="/">Home</Link>
      </span>
      {" << "}
      <span>
        <Link to="/verbal-reasoning">Verbal Reasoning</Link>
      </span>
      {" << "}
      {!currentTopic && <span className="active">List of Topics</span>}
      {currentTopic && (
        <>
          <span>
            <Link to={`/verbal-reasoning/${currentTopic}`}>{currentTopic}</Link>
          </span>
          {" << "}
          {section && (
            <>
              <span>
                <Link to={`/verbal-reasoning/${currentTopic}/${section}`}>{section}</Link>
              </span>
              {" << "}
            </>
          )}
          {page && totalPages && (
            <span className="active">
              Page {page} of {totalPages}
            </span>
          )}
        </>
      )}
    </BreadcrumbNav>
  );
};

export default Breadcrumb;