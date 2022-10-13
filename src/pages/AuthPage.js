import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import logo from '../assets/logo.png';
import KlipLogin from '../assets/img/KlipLogin.png';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const StyledAuth = styled.div`
  width: 100%;
  height: 100vh;
  margin:0;
  padding:10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function AuthPage() {
  const { connect } = useContext(UserContext);
  const dispatch = useDispatch();

  return (
    <StyledAuth>
      <img src={logo} alt='logo' style={{ width: 60 }} />
      <h1 style={{ marginBottom: 100 }}>Ticketo</h1>
      <img onClick={connect} src={KlipLogin} style={{ width: 280, marginBottom: 200 }} />
    </StyledAuth>
  )
}