import React, { useState } from "react";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import SearchBar from "./components/SearchBar";
import TopicsGrid from "./components/TopicsGrid";
import Footer from "./components/Footer";

function App() {
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
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <Header />
      <Breadcrumb />
      <div style={{ margin: "20px 0" }}>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          total={topics.length}
          filtered={filteredTopics.length}
        />
        <TopicsGrid topics={filteredTopics} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
