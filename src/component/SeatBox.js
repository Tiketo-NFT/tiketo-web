import React from 'react';
import styled from 'styled-components';

const SEAT_NUMBER = ['01', '02', '03', '04', '05', '06', '07', '08',]
const SEAT_ALPHA = ['', 'A', 'B', 'C', 'D', 'E']

const Grid = styled.div`
  width: 256px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 0px;
`;
const GridSide = styled.div`
  width: 32px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0px;
`;

const Cell = styled.div`
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #9d9d9d;
`;

function SeatBox({ seatInfo }) {
  return (
    <div style={{ display: 'flex', width: '320px', marginTop: '12px' }}>
      <GridSide>
        {SEAT_ALPHA.map(function (alpha) {
          return (
            <Cell>
              {alpha}
            </Cell>
          )
        })}
      </GridSide>

      <Grid>
        {SEAT_NUMBER.map(function (num) {
          return (
            <Cell>
              {num}
            </Cell>
          )
        })}
        {seatInfo.map(function (isReserved) {
          return (
            <>
              {isReserved ?
                <div style={{ width: '32px', height: '32px', border: '0.1px solid #9d9d9d', backgroundColor: '#d4d4d4' }}></div>
                :
                <div style={{ width: '32px', height: '32px', border: '0.1px solid #9d9d9d', backgroundColor: 'white' }}></div>}
            </>
          )
        })}
      </Grid>

      <GridSide>
        {SEAT_ALPHA.map(function (num) {
          return (
            <Cell>
              {num}
            </Cell>
          )
        })}
      </GridSide>
    </div>
  );
}

export default SeatBox;