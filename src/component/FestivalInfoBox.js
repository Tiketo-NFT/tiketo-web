import React from 'react';
import styled from 'styled-components';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10;
  border-color: black;
  border-width: 1;
`;

function FestivalInfoBox({ festival }) {
  return (
    <Link to={`/detail/${festival.index}`} state={{ festival: festival }}>
      <InfoBox>
        <img src={festival.thumbImg} style={{ width: 100 }} />
        <div>
          <p>{festival.name}</p>
          <p>{festival.description}</p>
          <p>{festival.price} pUSD</p>
        </div>
        <FaAngleRight />
      </InfoBox>
    </Link>
  );
}

export default FestivalInfoBox;