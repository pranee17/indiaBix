import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainComponent } from "./styles/styled-components";

import Header from "./components/VerbalReasoning/Header";
import Footer from "./components/VerbalReasoning/Footer";
import Home from "./components/VerbalReasoning/Home";
import QuestionPageLogic from "./components/QuestionsPage/QuestionPage";
import Breadcrumb from "./components/VerbalReasoning/Breadcrumb";
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
              <Breadcrumb/>
                <QuestionPageLogic />
              </>
            }
          />
          <Route
            path="//blood-relation-test"
            element={
              <>
              <Breadcrumb/>
                <QuestionPageLogic />
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