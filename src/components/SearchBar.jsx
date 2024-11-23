import React from "react";
import { SearchContainer } from "../styles/styled-components";

const SearchBar = ({ searchQuery, setSearchQuery, total, filtered }) => (
  <SearchContainer>
    <input
      type="text"
      placeholder="Filter"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <span>{`Filtered ${filtered} from ${total}`}</span>
  </SearchContainer>
);

export default SearchBar;
