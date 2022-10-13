import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LayoutNoFooter from '../component/LayoutNoFooter';
import SeatBox from '../component/SeatBox';
import styled from 'styled-components';
import XIcon from '../assets/img/XIcon.svg';
import LineImg from '../assets/img/line.svg';


// 가상의 seatInfo 가정하고 렌더링해보기.
let seatInfo = Array.from({ length: 40 }, (v, i) => false);
seatInfo[2] = true;
seatInfo[10] = true;
seatInfo[15] = true;
seatInfo[16] = true;
seatInfo[19] = true;
seatInfo[28] = true;
seatInfo[30] = true;
seatInfo[31] = true;
seatInfo[32] = true;

const BottomSheet = styled.div`
  width: 100%;
  height: 50vh;
  background-color: white;
  position: relative;
  top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-grow: 1;
`;

const BackBtn = styled.div`
  font-weight: bold;
`;

const NextBtn = styled.div`
  background-color: black;
  font-weight: bold;
  color: white;
  padding: 12px;
  border-radius: 20px;
`;

const Li = styled.li`
  margin: 4px 0;
`;

function TicketingPage() {
  const [seat, setSeat] = useState('Choosing...');
  const location = useLocation();
  const navigate = useNavigate();
  const { festival } = location.state;

  return (
    <LayoutNoFooter style={{ overflow: 'hidden' }}>
      <div style={{ position: 'relative', backgroundColor: 'black', zIndex: '-1' }}>
        <div style={{ overflow: 'hidden', width: '100%', height: '150px', position: 'relative', top: '-1vh', zIndex: '-1' }}>
          <img src={festival.fullImg} alt='' style={{ filter: 'brightness(70%)', scale: '1.1', width: '100%' }} />
        </div>
        <div style={{ position: 'absolute', top: '10%', color: 'white', padding: '24px' }}>
          <h1 style={{ fontWeight: 'bold', marginBottom: '16px' }}>{festival.name}</h1>
          <p style={{ marginBottom: '8px' }}>{festival.description}</p>
          <p>{new Date(festival.schedule).toISOString().slice(0, 10)}</p>
        </div>
      </div>

      <BottomSheet>
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#676767' }}>
              Purchasing
            </div>
            <div>
              <img src={XIcon} alt='' />
            </div>
          </div>

          <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '12px', marginBottom: '12px' }}>Seat</div>
            <div>Please select a seat that you prefer to watch.</div>

            <div style={{ width: '100%', textAlign: 'center', border: '1px solid', borderColor: '#E7E7E7', color: '#676767', marginTop: '18px' }}><div style={{ padding: '8px' }}>S T A G E</div></div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <SeatBox seatInfo={seatInfo} setSeat={setSeat} />
              <img src={LineImg} alt='' style={{ marginTop: '20px', marginBottom: '12px' }} />
            </div>

            <div>
              <p style={{ color: '#676767', marginBottom: '12px' }}>Purchase Summary</p>
              <ul style={{ listStyleType: 'circle', marginLeft: '16px' }}>
                <Li>Number of Tickets: 1 Adult</Li>
                <Li>Date of Performance: {new Date(festival.schedule).toISOString().slice(0, 10)}</Li>
                <Li>Seat: {seat}</Li>
                <Li>Total: {festival.price} pUSD</Li>
              </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', alignItems: 'center' }}>
              <BackBtn onClick={() => navigate(-1)} style={{ marginLeft: '16px' }}>Back</BackBtn>
              <Link to='/check' state={{ festival: festival, seat: seat }} style={{ textDecoration: 'none' }}>
                <NextBtn>Confirm and Pay</NextBtn>
              </Link>
            </div>

          </div>
        </div>
      </BottomSheet>
    </LayoutNoFooter>
  );
}

export default TicketingPage;