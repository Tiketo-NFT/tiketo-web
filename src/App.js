import React from 'react';
import AppNav from './navigation/AppNav';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Caver from "caver-js";
import { FactoryAbi } from './abi/Factory.abi';
import { FACTORY_ADDRESS } from './address';
import { addFestival } from './features/festival/festivalSlice';

function App() {
  const festivals = useSelector((state) => state.festival.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (festivals.length === 0) {
      const caver = new Caver(new Caver.providers.HttpProvider(process.env.REACT_APP_KLAYTN_MAINNET_NODE_URI));
      const factoryContract = new caver.klay.Contract(FactoryAbi, FACTORY_ADDRESS);
      async function fetchFestivals() {
        const len = await factoryContract.methods.festivalInfoLength().call();
        for (let i = 0; i < len; i++) {
          const { index, name, description, thumbImg, fullImg, schedule, price } = await factoryContract.methods.festivalInfos(i).call();
          const festival = { index, name, description, thumbImg, fullImg, schedule, price }
          dispatch(addFestival(festival));
        }
      }
      fetchFestivals();
    }
  }, []);
  return (
    <FontDefault>
      <AppNav />
    </FontDefault>
  );
}

const FontDefault = styled.div`
    font-family: 'Helvetica';
`;

export default App;
