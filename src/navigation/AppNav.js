import { useContext } from 'react';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';
import { BrowserRouter as Router } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export default function AppNav() {
  const { isLoading, userAddress } = useContext(UserContext);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <Router>
      {userAddress === '' ? <AuthPage /> : <MainPage />}
    </Router>
  )
}