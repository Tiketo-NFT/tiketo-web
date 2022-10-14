import React from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';

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

function SeatBox({ seatInfo, setSeat, selectedSeat, setSelectedSeat }) {
  let cnt = 0;

  const onClickSeat = (e) => {
    const id = e.target.id - 1;
    setSelectedSeat(id);
    const alphaIndex = parseInt(id / 8) + 1;
    const numIndex = id % 8;
    setSeat(SEAT_ALPHA[alphaIndex] + SEAT_NUMBER[numIndex]);
  }

  return (
    <>
      {seatInfo &&
        <div style={{ display: 'flex', width: '320px', marginTop: '12px' }} key={nanoid()}>
          <GridSide>
            {SEAT_ALPHA.map(function (alpha) {
              return (
                <Cell key={nanoid()}>
                  {alpha}
                </Cell>
              )
            })}
          </GridSide>

          <Grid>
            {SEAT_NUMBER.map(function (num) {
              return (
                <Cell key={nanoid()}>
                  {num}
                </Cell>
              )
            })}
            {seatInfo.map(function (isReserved) {
              cnt = cnt + 1;
              const colorChoice = (selectedSeat === (cnt - 1)) ? 'black' : 'white';
              return (
                <>
                  {isReserved ?
                    <div style={{ width: '32px', height: '32px', border: '0.1px solid #9d9d9d', backgroundColor: '#d4d4d4' }} key={nanoid()}></div>
                    : <div onClick={onClickSeat} style={{ width: '32px', height: '32px', border: '0.1px solid #9d9d9d', backgroundColor: `${colorChoice}` }} key={nanoid()} id={cnt}></div>
                  }
                </>
              )
            })}
          </Grid>

          <GridSide>
            {SEAT_ALPHA.map(function (num) {
              return (
                <Cell key={nanoid()}>
                  {num}
                </Cell>
              )
            })}
          </GridSide>
        </div>
      }
    </>
  );
}

export default SeatBox;