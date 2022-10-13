import React from 'react';
import styled from 'styled-components';
import { Box } from '../pages/FaucetPage';


function TicketInfoBottomSheet ({festival, ticket}) {
    return (
      <Box>
        <div>
          Ticket Information
        </div>
        <img src={festival.fullImg} alt='' />
        <div>
          <p>{festival.name}</p>
          <p>{festival.description}</p>
          <p>{new Date(festival.schedule).toISOString().slice(0, 10)}</p>
          <p>1 Adult, {new Date(ticket.schedule).toISOString().slice(0, 10)}, {ticket.seat}</p>
          <p>{ticket.price}</p>
        </div>
        <div>
          <p>QR Code</p>
          <div>
            QR Code Pic
          </div>
        </div>
        </Box>
    );
}

export default TicketInfoBottomSheet;