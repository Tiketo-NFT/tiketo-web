import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css'

import Layout from '../component/Layout';
import { ReactComponent as FaucetMainImg } from '../assets/img/FaucetMain.svg';
import { NextBtn } from './TicketingPage';
import { Body, SubtitleBar } from './HomePage';
import LoadingModal from '../component/LoadingModal';

import Caver from 'caver-js';
import { PAPER_MONEY_ADDRESS } from '../address';
import { API_PREPARE, API_RESULT, KLIP_URL } from '../api/apiLinks';
import FaucetSuccessBottomSheet from '../component/FaucetSuccessBottomSheet';
import { faucet } from '../features/user/userSlice';

const caver = new Caver(new Caver.providers.HttpProvider('https://klaytn01.fandom.finance/'));

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function FaucetPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [txHash, setTxHash] = useState('');
    const dispatch = useDispatch();
    function onDismiss() {
        setOpen(false)
    }

    const onClickClaim = async () => {
        setModalOpen(true);
        // eslint-disable-next-line
        const params = { "bapp": { "name": "Ticketo" }, "type": "execute_contract", "transaction": { "to": `${PAPER_MONEY_ADDRESS}`, "value": "0", "abi": "{ \"inputs\": [ { \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"mint\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }", "params": `[\"${caver.utils.convertToPeb(500000, 'KLAY')}\"]` } }

        await axios.post(API_PREPARE, params)
            .then((res) => {
                const { request_key } = res.data;
                window.location.href = (`${KLIP_URL}${request_key}`);

                let timer = setInterval(() => {
                    axios.get(`${API_RESULT}${request_key}`)
                        .then(async (res) => {
                            if (res.data.status === 'completed') {
                                const status = res.data.result.status;
                                if (status === 'success') {
                                    const TX_HASH = res.data.result.tx_hash;
                                    setTxHash(TX_HASH);
                                    setModalOpen(false);
                                    setOpen(true);
                                    dispatch(faucet(500000));
                                    clearInterval(timer);
                                }
                            }
                        })
                }, 1000);
            })
            .catch((e) => console.log(e));
    }

    return (
        <Layout>
            <Body>
                <SubtitleBar>
                    <p>Faucet</p>
                </SubtitleBar>

                <Box>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '24px' }}>
                        Get 500,000 $pUSD
                    </div>
                    <div>
                        <FaucetMainImg />
                    </div>
                    <div style={{ margin: '24px' }}>
                        Note: You can get $pUSD once a week.
                    </div>
                    <NextBtn onClick={onClickClaim} style={{ boxShadow: '1px 2px 9px black', }}>
                        Claim $pUSD Tokens
                    </NextBtn>
                </Box>
            </Body>

            <BottomSheet onDismiss={onDismiss} open={open}>
                <FaucetSuccessBottomSheet style={{ zIndex: 5 }} onClick={onDismiss} txHash={txHash} />
            </BottomSheet>
            <LoadingModal open={modalOpen} />

        </Layout>
    );
}

export default FaucetPage;