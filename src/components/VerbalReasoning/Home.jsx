import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import SearchBar from "./SearchBar";
import TopicsGrid from "./TopicsGrid";
import { FilteredComponent } from "../../styles/styled-components";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const topics = [
    "Logical Sequence of Words",
    "Blood Relation Test",
    "Syllogism",
    "Series Completion",
    "Cause and Effect",
    "Dice",
    "Venn Diagrams",
    "Cube and Cuboid",
    "Analogy",
    "Seating Arrangement",
    "Character Puzzles",
    "Direction Sense Test",
    "Classification",
    "Data Sufficiency",
    "Arithmetic Reasoning",
    "Verification of Truth",
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Breadcrumb />
      <FilteredComponent>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          total={topics.length}
          filtered={filteredTopics.length}
        />
        <TopicsGrid topics={filteredTopics} />
      </FilteredComponent>
    </>
  );
};

export default Home;
