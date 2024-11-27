import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainComponent } from "./styles/styled-components";

import Header from "./components/VerbalReasoning/Header";
import Footer from "./components/VerbalReasoning/Footer";
import Home from "./components/VerbalReasoning/Home";
import QuestionPageLogic from "./components/QuestionsPage/QuestionPage";
import Breadcrumb from "./components/VerbalReasoning/Breadcrumb";
import { bloodrelationquestions } from "./components/topics/BloodRelation";
import { logicalquestions } from "./components/topics/LogicalSequence";
import { analogyquestions } from "./components/topics/Analogy";
function App() {
  return (
    <Router>
      <MainComponent>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/logical-sequence"
            element={
              <> 
                <QuestionPageLogic questions={logicalquestions} subTopic={"Logical Sequence of Words"}  />
              </>
            }
          />
          <Route
            path="/blood-relation-test"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Blood Relation Test"} />
              </>
            }
          />
    
          <Route
            path="/syllogism"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Syllogism"} />
              </>
            }
          />
          <Route
            path="/series-completion"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Series Completion"} />
              </>
            }
          />
          <Route
            path="/cause-and-effect"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Cause And Effect"} />
              </>
            }
          />
          <Route
            path="/dice"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Dice"} />
              </>
            }
          />
          <Route
            path="/venn-diagram"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Venn Diagram"} />
              </>
            }
          />
          <Route
            path="/cube-and-cuboid"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Cube And Cuboid"} />
              </>
            }
          />
          <Route
            path="/analogy"
            element={
              <>
             
                <QuestionPageLogic questions={analogyquestions} subTopic={"Analogy"} />
              </>
            }
          />
          <Route
            path="/seating-arrangement"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Seating-Arrangement"} />
              </>
            }
          />
          <Route
            path="/character-puzzles"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Character Puzzles"} />
              </>
            }
          />
          <Route
            path="/direction-sense-test"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Direction Sense Test"} />
              </>
            }
          />
          <Route
            path="/classification"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Classification"} />
              </>
            }
          />
          <Route
            path="/data-sufficiency"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Data Sufficiency"} />
              </>
            }
          />
          <Route
            path="/arithmetic-reasoning"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Arithmetic Reasoning"} />
              </>
            }
          />
          <Route
            path="/verification-of-truth"
            element={
              <>
             
                <QuestionPageLogic questions={bloodrelationquestions} subTopic={"Verification Of Truth"} />
              </>
            }
          />
              </Routes>
        <Footer />
      </MainComponent>
    </Router>
  );
}

export default App;
