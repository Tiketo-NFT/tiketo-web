import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function AuthPage() {
  const { connect } = useContext(UserContext);

  return (
    <>
      <img src='../../public/icons/favicon-128.png' alt='logo' />
      <h1>Ticketo</h1>
      <button onClick={connect}>Klip으로 로그인</button>
    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 50,
//     height: 50
//   },
//   klipButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 10,
//   },
//   text: {
//     color: 'white'
//   }
// });