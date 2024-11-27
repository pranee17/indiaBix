import React from "react";
import { Link } from "react-router-dom"; // Use Link for routing
import { BreadcrumbNav } from "../../styles/styled-components";

const Breadcrumb = ({  page, totalPages, Topic , subTopic , Topiclink , subTopiclink}) => {
  return (
    <BreadcrumbNav>
      <span>
        <Link to="/">Home</Link>
      </span>
      {" << "}
      <span>
        <Link to={Topiclink}>Verbal Reasoning</Link>
      </span>
      {" << "}
      {!subTopic && <span className="active">List of Topics</span>}
      {subTopic && (
        <>
          <span>
            <Link to={`/verbal-reasoning/${subTopic}`}>{subTopic}</Link>
          </span>
          {" << "}
          
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