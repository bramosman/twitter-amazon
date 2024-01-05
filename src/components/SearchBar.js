// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  padding: 10px;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      {/* Add your search bar content here */}
      <input type="text" placeholder="Search..." />
    </SearchBarContainer>
  );
};

export default SearchBar;
