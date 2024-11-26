import React from 'react';
import { ExplanationSection } from '../styledComponents'; 

const Explanation = ({ explanation }) => {
  return (
    <ExplanationSection>
      <h3>Explanation</h3>
      <p>{explanation}</p>
    </ExplanationSection>
  );
};

export default Explanation;
