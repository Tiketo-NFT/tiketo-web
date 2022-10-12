import React from 'react';
import './App.css';
import { UserProvider } from './context/UserContext';
import AppNav from './navigation/AppNav';

function App() {
  return (
    <UserProvider>
      <AppNav />
    </UserProvider>
  );
}

export default App;
