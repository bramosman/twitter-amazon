// src/App.js
import React from 'react';
import styled from 'styled-components';
import SidePanel from './components/SidePanel.js';
import SearchBar from './components/SearchBar.js';
import MainContainer from './components/MainContainer.js';

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
  // Access environment variables
  const apiKey = process.env.apiKey;
  const apiSecretKey = process.env.apiSecretKey;
  const accessToken = process.env.accessToken;
  const accessTokenSecret = process.env.accessTokenSecret;

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
