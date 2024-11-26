import React from 'react';
import { DiscussionStyle, SectionContainer } from '../styledComponents'; 

const Discussion = ({ discussion }) => {
  return (
    <SectionContainer>
      <DiscussionStyle>
        <h3>Discussion</h3>
        {discussion.map((entry, index) => (
          <div key={index} className="comment">
            <strong>{entry.name}:</strong> {entry.comment}
          </div>
        ))}
      </DiscussionStyle>
    </SectionContainer>
  );
};

export default Discussion;
