import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LayoutNoFooter from '../component/LayoutNoFooter';
import SeatBox from '../component/SeatBox';
import styled from 'styled-components';
import XIcon from '../assets/img/XIcon.svg';


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

function TicketingPage() {
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SeatBox seatInfo={seatInfo} />
            </div>
          </div>
        </div>
      </BottomSheet>

      {/* <div>

        <div>
          <p>subtitle</p>
          <p>{festival.description}</p>
          <p>{festival.schedule}</p>
          <SeatBox />
          <p>summary</p>
          <p>1 Adult</p>
          <p>{festival.schedule}</p>
          <p>??? zone</p>
          <p>Total: {festival.price} pUSD</p>

          <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <Link to='/check'>
              <button>Next</button>
            </Link>
          </div>

        </div>
      </div> */}
    </LayoutNoFooter>
  );
}

export default TicketingPage;