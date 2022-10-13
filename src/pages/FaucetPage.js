import React from 'react';
import Layout from '../component/Layout';
import {ReactComponent as FaucetMainImg} from '../assets/img/FaucetMain.svg';
import { NextBtn } from './TicketingPage';
import styled from 'styled-components';
import { Body, SubtitleBar } from './HomePage';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function FaucetPage() {
    return (
        <Layout>
            <Body>
            <SubtitleBar>
                <p>Faucet</p>
            </SubtitleBar>

            <Box>
                <div style={{fontSize:'32px', fontWeight:'bold', margin:'24px'}}>
                    Get 500,000 $pUSD
                </div>
                <div>
                    <FaucetMainImg />
                </div>
                <div style={{margin:'24px'}}>
                    Note: You can get $pUSD once a week.
                </div>
                <NextBtn onClick={() => {}} style={{boxShadow: '1px 2px 9px black',}}>
                    Claim $pUSD Tokens
                </NextBtn>
            </Box>
            </Body>
        </Layout>
    );
}

export default FaucetPage;