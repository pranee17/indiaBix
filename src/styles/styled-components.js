import styled from "styled-components";

export const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
`;

export const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
  }
`;

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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

export const TopicItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .folder-icon {
    color: #ffca28;
    font-size: 20px;
  }
`;

export const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff;
  color: #333;
  font-family: Arial, sans-serif;

  & > * {
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const FilteredComponent = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #28a745;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Icon = styled.span`
  font-size: 20px;
  color: #28a745;
`;

export const BreadcrumbNav = styled.nav`
  margin: 20px auto;
  font-size: 16px;
  color: #555;
  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.4);
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #007bff;
    &:hover {
      text-decoration: underline;
    }
  }

  .active {
    font-weight: bold;
    color: #28a745;
  }
  span {
    margin: 0 5px;
  }

  span:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 15px;
  }
`;
