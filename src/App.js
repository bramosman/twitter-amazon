// src/App.js
import React from 'react';
import styled from 'styled-components';
import SidePanel from './components/SidePanel.js';  // Add '.js' extension
import SearchBar from './components/SearchBar.js';  // Add '.js' extension
import MainContainer from './components/MainContainer.js';  // Add '.js' extension

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainAndSidePanelContainer = styled.div`
  display: flex;
  flex-direction: row; /* Change to row to place SidePanel on the left */
  flex: 1;
`;

const App = () => {
  return (
    <AppContainer>
      <SearchBar />
      <MainAndSidePanelContainer>
        <SidePanel />
        <MainContainer />
      </MainAndSidePanelContainer>
    </AppContainer>
  );
};

export default App;
