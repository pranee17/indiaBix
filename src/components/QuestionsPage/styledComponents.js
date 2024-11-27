import styled from "styled-components";

export const DiscussionStyle = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;

  .comment {
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
`;

export const WorkspaceArea = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;

  textarea {
    width: 100%;
    height: 200px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
`;

export const ReportForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;

  input,
  textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 25px;

  button {
    padding: 12px 15px;
    font-size: 14px;
    border: 1px solid  #008631;
    border-radius: 5px;
    background: white;
    color: black;   
    cursor: pointer;

    &:hover {
      background: #cccccc;
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;

  button {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background: #f8f9fa;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;

    opacity: 1;
    visibility: visible;

    &.active {
      background: #008631;
      color: #fff;
      font-weight: bold;
    }

    &:disabled {
      background: #ddd;
      cursor: not-allowed;
      border: 1px solid #ddd;
    }

    &:hover {
      background: #abf7b1;
      color: #fff;
    }
  }
`;

export const SectionContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #f7f8fa;
 border: 1px solid #ddd;
  border-radius: 5px;
`;

export const QuestionBox = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 10px;
      
      margin-bottom: 5px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #f1f1f1;
      }

      &.selected {
        background: #28a745;
        color: white;
      }
    }
  }
`;

export const ExplanationSection = styled.div`
  margin-top: 10px;
  padding: 17px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
