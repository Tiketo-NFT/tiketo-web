import React from 'react';
import styled from 'styled-components';
import { FaAngleRight } from "react-icons/fa";


const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10;
  border-color: black;
  border-width: 1;
`;

function FestivalInfoBox ({festival}) {
    console.log(festival);
    return (
      <>
        <InfoBox>
            <img src={festival.thumbImg} style={{width:100}} />
            <div>
              <p>{festival.name}</p>
              <p>{festival.description}</p>
              <p>{festival.price} pUSD</p>
            </div>
            <FaAngleRight />
        </InfoBox>
        </>
    );
}

export default FestivalInfoBox;