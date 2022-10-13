import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CashImg from '../assets/img/Cash.png';


const InfoBox = styled.div`
  padding: 10px;
  border: 0.1px solid #676767;
  background-color: white;
  border-radius: 12px;
  margin-top: 20px;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

function FestivalInfoBox({ festival }) {
  return (
    <Link to={`/detail/${festival.index}`} state={{ festival: festival }} style={{ textDecoration: 'none' }}>
      <InfoBox>
        <img src={festival.thumbImg} style={{ width: '100%' }} />
        <div style={{ marginTop: '10px' }}>
          <p style={{ color: 'black', fontSize: '21px', fontWeight: 'bold', marginBottom: '10px', marginTop: '6px' }}>{festival.name.length > 28 ? festival.name.substr(0, 28) + '...' : festival.name}</p>
          <p style={{ color: '#676767', marginBottom: '8px' }}>{festival.description}</p>
          <p style={{ color: '#676767', marginBottom: '8px' }}>{new Date(festival.schedule).toISOString().slice(0, 10)}</p>
          <div style={{
            marginLeft: '65%',
            width: '50px',
            height: '24px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: 'black',
          }}>
            <img src={CashImg} style={{ width: '16px', marginRight: '4px' }} />
            <span style={{ fontSize: '24px', fontWeight: 'bold', marginRight: '4px' }}>{festival.price}</span>pUSD
          </div>
        </div>
      </InfoBox>
    </Link >
  );
}

export default FestivalInfoBox;