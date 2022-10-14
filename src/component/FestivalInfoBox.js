import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CashImg from '../assets/img/Cash.png';
import { ImgCrop } from './TicketInfoBox';

export const InfoBox = styled.div`
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
        <div style={{ width: '100%', height: '150px', position: 'relative' }}>
          <ImgCrop src={festival.thumbImg} style={{ width: '100%' }} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <p style={{ color: 'black', fontSize: '21px', fontWeight: 'bold', marginBottom: '10px', marginTop: '6px' }}>{festival.name.length > 28 ? festival.name.substr(0, 28) + '...' : festival.name}</p>
          <p style={{ color: '#676767', marginBottom: '8px' }}>{festival.description}</p>
          <p style={{ color: '#676767', marginBottom: '8px' }}>{festival.scheule}</p>
          <div style={{
            margin: 'auto',
            height: '24px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'black',
            // backgroundColor:'black',
          }}>
            <div></div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <div>
              <img src={CashImg} alt='' style={{ width: '16px', marginRight: '4px' }} />
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginRight: '4px' }}>{festival.price}</div>
            pUSD
            </div>
          </div>
        </div>
      </InfoBox>
    </Link >
  );
}

export default FestivalInfoBox;