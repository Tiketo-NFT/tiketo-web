import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function MainPage() {
  const { userAddress, userBalance } = useContext(UserContext);

  return (
    <>
      <h1>userAddress:{userAddress}</h1>
      <h1>userBalance:{userBalance}</h1>
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