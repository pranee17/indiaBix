import styled from "styled-components";

export const BreadcrumbNav = styled.nav`
  font-size: 14px;
  color: #777;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  .active {
    color: #28a745;
    font-weight: bold;
  }
`;
