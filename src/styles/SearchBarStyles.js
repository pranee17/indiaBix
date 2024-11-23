import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;

  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
  }

  span {
    font-size: 14px;
    color: #555;
    margin-left: 10px;
  }
`;
