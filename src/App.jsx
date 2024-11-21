import React, { useState } from "react";
import "./App.css";

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
    <div className="App">
      <Header />
      <Breadcrumb />
      <div className="topics-container">
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

const Header = () => (
  <header className="header">
    <h1>Verbal Reasoning</h1>
  </header>
);

const Breadcrumb = () => (
  <nav className="breadcrumb">
    <span>Home</span> &gt; &gt;
    <span>Verbal Reasoning</span> &gt; &gt;
    <span className="active">List of Topics</span>
  </nav>
);

const SearchBar = ({ searchQuery, setSearchQuery, total, filtered }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Filter"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <span className="filter-info">{`Filtered ${filtered} from ${total}`}</span>
  </div>
);

const TopicsGrid = ({ topics }) => {
  if (topics.length === 0) {
    return <p className="no-results">No topics found.</p>;
  }

  return (
    <div className="topics-grid">
      {topics.map((topic, index) => (
        <div key={index} className="topic-item">
          <span className="folder-icon">📁</span>
          <span>{topic}</span>
        </div>
      ))}
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <a href="#" className="test-link">
      Take an Online Verbal Reasoning Test Now!
    </a>
  </footer>
);


export default App;
