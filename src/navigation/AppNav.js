import { useSelector } from 'react-redux';
import AuthPage from '../pages/AuthPage';
import MainNav from './MainNav';

export default function AppNav() {
  const address = useSelector((state) => state.user.address);

  return (
    <>
      {address === '' ? <AuthPage /> : <MainNav />}
    </>
  )
}