import React from 'react';
import styled from 'styled-components';

import { Box } from '../pages/FaucetPage'
import QRImg from '../assets/img/QRExample.svg';
import XIcon from '../assets/img/XIcon.svg';

const Text = styled.div`
  color: #676767;
  margin: 4px 0;
`;


function TicketInfoBottomSheet({ festival, seatStr, onClick }) {
  return (
    <Box>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div />
        <div onClick={onClick}>
          <img src={XIcon} alt='' style={{ marginRight: '16px' }} />
        </div>
      </div>

      <div style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>
        Ticket Information
      </div>
      <img src={festival.fullImg} alt='' style={{ width: '90%', margin: '20px 0' }} />
      <Box>
        <Text>{festival.name}</Text>
        <Text>{festival.description}</Text>
        <Text style={{ marginBottom: '20px' }}>{festival.schedule}</Text>
        <Text>1 Adult, {festival.schedule}, {seatStr}</Text>
        <Text>{festival.price} pUSD</Text>
      </Box>
      <Box style={{ marginBottom: '5vh', marginTop: '20px' }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>QR Code</p>
        <div style={{ margin: '12px 0' }}>
          <img src={QRImg} alt='' />
        </div>
      </Box>
    </Box>
  );
}

export default TicketInfoBottomSheet;