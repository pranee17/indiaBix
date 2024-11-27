import React, { useState } from "react";
import { questions } from "../topics/LogicalSequence";
import ButtonLogic from "./Buttons/ButtonLogic";
import Explanation from "./Buttons/Explanation";
import Discussion from "./Buttons/Discussion";
import Workspace from "./Buttons/WorkSpace";
import Report from "./Buttons/Report";
import { QuestionBox, SectionContainer } from "./styledComponents";
import Pagination from "../QuestionsPage/Pagination";


const QuestionPageLogic = () => {
  const [openSections, setOpenSections] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showTryAgainMessage, setShowTryAgainMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  const getCurrentPageQuestions = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    return questions.slice(startIndex, endIndex);
  };

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const correctAnswerIndex = questions[questionIndex].correctAnswer;
    if (optionIndex === correctAnswerIndex) {
      setSelectedAnswer({ questionIndex, optionIndex, isCorrect: true });
      setShowTryAgainMessage(false);
    } else {
      setSelectedAnswer({ questionIndex, optionIndex, isCorrect: false });
      setShowTryAgainMessage(true);
    }
  };

  const toggleSection = (questionIndex, section) => {
    setOpenSections((prev) => ({
      ...prev,
      [questionIndex]: prev[questionIndex] === section ? null : section,
    }));
  };

  return (
    <div className="logical-sequence">


      {getCurrentPageQuestions().map((question, index) => (
        <QuestionBox key={index}>
          <div className="question">
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, idx) => (
                <li key={idx}>
                  <label
                    style={{
                      color:
                        selectedAnswer?.questionIndex === index &&
                        selectedAnswer?.optionIndex === idx
                          ? idx === question.correctAnswer
                            ? "green"
                            : "red"
                          : "black",
                    }}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={
                        selectedAnswer?.questionIndex === index &&
                        selectedAnswer?.optionIndex === idx
                      }
                      onChange={() => handleAnswerChange(index, idx)}
                    />
                    {option}
                    {selectedAnswer?.questionIndex === index &&
                      selectedAnswer?.optionIndex === idx &&
                      idx === question.correctAnswer && (
                        <span style={{ color: "green", marginLeft: "8px" }}>
                          ✔️
                        </span>
                      )}
                    {selectedAnswer?.questionIndex === index &&
                      selectedAnswer?.optionIndex === idx &&
                      idx !== question.correctAnswer && (
                        <span style={{ color: "red", marginLeft: "8px" }}>
                          ❌
                        </span>
                      )}
                  </label>
                </li>
              ))}
            </ul>

            {selectedAnswer?.questionIndex === index &&
              !selectedAnswer.isCorrect && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                  Try again! That's not the correct answer.
                </p>
              )}
            {selectedAnswer?.questionIndex === index &&
              selectedAnswer.isCorrect && (
                <p style={{ color: "green", fontWeight: "bold" }}>Correct!</p>
              )}

            {selectedAnswer?.questionIndex === index &&
              selectedAnswer.isCorrect && (
                <Explanation explanation={question.explanation} />
              )}
          </div>

          <ButtonLogic
            openSection={openSections[index]}
            toggleSection={(section) => toggleSection(index, section)}
          />

          {openSections[index] === "discussion" && (
            <Discussion discussion={question.discussion} />
          )}

          {openSections[index] === "workspace" && <Workspace />}
          {openSections[index] === "explanation" && (
            <Explanation explanation={question.explanation} />
          )}

          {openSections[index] === "report" && <Report />}
        </QuestionBox>
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        questionsPerPage={questionsPerPage}
      />
    </div>
  );
};

export default QuestionPageLogic;