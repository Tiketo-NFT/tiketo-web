import React, { useEffect, useState } from 'react';
import Layout from '../component/Layout';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import Caver from "caver-js";
import { TicketAbi } from '../abi/Ticket.abi';
import { FactoryAbi } from '../abi/Factory.abi';
import { PaperMoneyAbi } from '../abi/PaperMoney.abi';
import { FACTORY_ADDRESS, PAPER_MONEY_ADDRESS, TICKET_ADDRESS } from '../address';
import FestivalInfoBox from '../component/FestivalInfoBox';
import example_festivals from '../assets/img/example_festivals/example_festivals';



export const SubtitleBar = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`;

export const Body = styled.div`
    background-color: #F0F0F0;
    min-height: 80vh;
    padding: 24px;
`;

function HomePage() {
    const [festivals, setFestivals] = useState(example_festivals);

    // useEffect(() => {
    //     const caver = new Caver(new Caver.providers.HttpProvider(process.env.REACT_APP_KLAYTN_MAINNET_NODE_URI));
    //     const factoryContract = new caver.klay.Contract(FactoryAbi, FACTORY_ADDRESS);
    //     async function fetchFestivals() {
    //         const len = await factoryContract.methods.festivalInfoLength().call();
    //         for (let i = 0; i < len; i++) {
    //             const { index, name, description, thumbImg, fullImg, schedule, price } = await factoryContract.methods.festivalInfos(i).call();
    //             const festival = { index, name, description, thumbImg, fullImg, schedule, price }
    //             setFestivals((prev) => [...prev, festival]);
    //         }
    //     }
    //     fetchFestivals();
    // }, []);
    return (
        <Layout>
            <Body>
                <SubtitleBar>
                    <p>Popular Events</p>
                    <FaSearch style={{ color: '#1E1E1E' }} />
                </SubtitleBar>
                {festivals.map((festival) => (<FestivalInfoBox festival={festival} key={festival.index} />))}
            </Body>
        </Layout>
    );
}

export default HomePage;