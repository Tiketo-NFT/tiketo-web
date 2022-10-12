import { useContext } from 'react';
import AuthPage from '../pages/AuthPage';
import { UserContext } from '../context/UserContext';
import MainNav from './MainNav';

export default function AppNav() {
  const { isLoading, userAddress } = useContext(UserContext);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <>
      {userAddress === '' ? <AuthPage /> : <MainNav />}
    </>
  )
}