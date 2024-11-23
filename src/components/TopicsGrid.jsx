import React from "react";
import { GridContainer, TopicItem } from "../styles/styled-components";

const TopicsGrid = ({ topics }) => {
  if (topics.length === 0) {
    return <p style={{ color: "#777", textAlign: "center" }}>No topics found.</p>;
  }

  return (
    <GridContainer>
      {topics.map((topic, index) => (
        <TopicItem key={index}>
          <span className="folder-icon">📁</span>
          <span>{topic}</span>
        </TopicItem>
      ))}
    </GridContainer>
  );
};

export default TopicsGrid;
