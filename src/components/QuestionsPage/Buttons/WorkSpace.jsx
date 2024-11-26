import React from 'react';
import { WorkspaceArea, SectionContainer } from '../styledComponents';

const Workspace = () => {
  return (
    <SectionContainer>
      <WorkspaceArea>
        <h3>Workspace</h3>
        <textarea placeholder="Type your notes here..."></textarea>
      </WorkspaceArea>
    </SectionContainer>
  );
};

export default Workspace;
