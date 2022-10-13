import React from 'react';
import { UserProvider } from './context/UserContext';
import AppNav from './navigation/AppNav';
import styled from 'styled-components';
import Global from './style/global';

function App() {
  return (
    <FontDefault>
      <UserProvider>
        <AppNav />
      </UserProvider>
    </FontDefault>
  );
}

const FontDefault = styled.div`
    font-family: 'Helvetica';
`;

export default App;
