import { useContext } from 'react';
import AuthPage from '../pages/AuthPage';
import { UserContext } from '../context/UserContext';
import MainNav from './MainNav';
import { useSelector } from 'react-redux';

export default function AppNav() {
  const address = useSelector((state) => state.user.address);
  console.log(address);
  console.log('hi');
  // const { isLoading, userAddress } = useContext(UserContext);

  // if (isLoading) {
  //   return (
  //     <h1>Loading...</h1>
  //   )
  // }

  return (
    <>
      {address === '' ? <AuthPage /> : <MainNav />}
    </>
  )
}