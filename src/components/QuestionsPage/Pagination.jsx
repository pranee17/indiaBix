import React, { useState } from "react";
import { questions } from "../../components/topics/LogicalSequence";
import { ButtonContainer, PaginationWrapper } from "./styledComponents";
import Breadcrumb from "../VerbalReasoning/Breadcrumb";

const Pagination = ({ setCurrentPage, currentPage, questionsPerPage }) => {
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* <Breadcrumb
        currentTopic="Logical Sequence of words"
        page={currentPage}
        totalPages={totalPages}
      /> */}
      <PaginationWrapper>
        <ButtonContainer>
          <button onClick={handlePrevClick} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </ButtonContainer>
      </PaginationWrapper>
    </>
  );
};

export default Pagination;
