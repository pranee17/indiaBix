import React from "react";
import { useNavigate } from "react-router-dom";
import { GridContainer, TopicItem } from "../../styles/styled-components";

const TopicsGrid = ({ topics }) => {
  const navigate = useNavigate();

  const handleTopicClick = (topic) => {
    const topicRoutes = {
      "Logical Sequence of Words": "/logical-sequence",
      "Blood Relation Test": "/blood-relation-test",
      "Syllogism": "/syllogism",
      "Series Completion": "/series-completion",
      "Cause and Effect": "/cause-and-effect",
    };

    const route = topicRoutes[topic];
    if (route) {
      navigate(route);
    } else {
      alert(`No page is defined for the topic: ${topic}`);
    }
  };

  if (topics.length === 0) {
    return <p style={{ color: "#777", textAlign: "center" }}>No topics found.</p>;
  }

  return (
    <GridContainer>
      {topics.map((topic, index) => (
        <TopicItem key={index} onClick={() => handleTopicClick(topic)}>
          <span className="folder-icon">📁</span>
          <span>{topic}</span>
        </TopicItem>
      ))}
    </GridContainer>
  );
};

export default TopicsGrid;