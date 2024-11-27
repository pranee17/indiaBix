import React, { useState } from "react";
import { ButtonContainer, PaginationWrapper } from "./styledComponents";


const Pagination = ({ setCurrentPage, currentPage, questionsPerPage , questions}) => {
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