import React from 'react';
import AppNav from './navigation/AppNav';
import styled from 'styled-components';

function App() {
  return (
    <FontDefault>
        <AppNav />
    </FontDefault>
  );
}

const FontDefault = styled.div`
    font-family: 'Helvetica';
`;

export default App;
