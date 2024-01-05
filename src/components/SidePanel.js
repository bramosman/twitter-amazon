// src/components/SidePanel.js
import React from 'react';
import styled from 'styled-components';

const SidePanelContainer = styled.div`
  width: 20%;
  background-color: #f0f0f0;
  padding: 20px;
`;

const SidePanel = () => {
  return (
    <SidePanelContainer>
      {/* Add your side panel content here */}
      <h2>Side Panel</h2>
    </SidePanelContainer>
  );
};

export default SidePanel;
