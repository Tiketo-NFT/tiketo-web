import React from 'react';
import { Link } from 'react-router-dom';
import { InfoBox } from './FestivalInfoBox';
import DummyImg from '../assets/img/example_festivals/0.png';
import styled from 'styled-components';


const DummyFestivalInfo = {
  index: 0,
  name: "The Fever - First World Tour in Asia",
  description: "CKay | Jamsil, Seoul, South Korea",
  thumbImg: DummyImg,
  fullImg: DummyImg,
  schedule: new Date(2022, 10, 14).getTime(),
  price: 100,
}

export const ImgCrop = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
    border-radius: 8px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


function TicketInfoBox({ ticket, setOpen, setSelectedTicket }) {
  // ticket의 인덱스로 festivalInfo를 조회하고, 거기서 fullImg를 가져와야 한다.
  const ticketInfo = DummyFestivalInfo;

  const onClick = () => {
    setOpen((prev) => !prev);
    setSelectedTicket({festival: ticketInfo, ticket:ticket});
  }


  return (
    <InfoBox onClick={onClick}>
      <FlexBox>
        <div style={{ width: '100px', height: '100px', position: 'relative' }}>
          <ImgCrop src={ticketInfo.thumbImg} alt='' />
        </div>
        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{ticketInfo.name.length > 24 ? ticketInfo.name.substr(0, 24) + '...' : ticketInfo.name}</p>
          <p style={{ color: '#676767', marginBottom: '8px', fontSize: '12px' }}>{ticketInfo.description}</p>
          <p style={{ color: '#676767', marginBottom: '8px', fontSize: '12px' }}>1 Adult, {new Date(ticketInfo.schedule).toISOString().slice(0, 10)}, {ticket.seat}</p>
        </div>
      </FlexBox>
    </InfoBox>
  );
}

export default TicketInfoBox;