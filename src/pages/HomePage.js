import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { FaSearch } from "react-icons/fa";

import Layout from '../component/Layout';
import FestivalInfoBox from '../component/FestivalInfoBox';
// import example_festivals from '../assets/img/example_festivals/example_festivals';



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
    // Design 중심으로 보고 싶으면,
    // const [festivals, setFestivals] = useState(example_festivals);

    const festivals = useSelector((state) => state.festival.list);

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