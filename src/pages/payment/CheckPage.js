import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import LayoutNoFooter from '../../component/LayoutNoFooter';
import { BackBtn, LikeBottomSheet, NextBtn } from '../TicketingPage';

import XIcon from '../../assets/img/XIcon.svg';
import WalletIcon from '../../assets/img/Wallet.svg';
import TicketIcon from '../../assets/img/Ticket.svg';
import CashIcon from '../../assets/img/Cash.png';

import { KLIP_URL, API_PREPARE, API_RESULT } from '../../api/apiLinks';
import Caver from "caver-js";
import { PaperMoneyAbi } from '../../abi/PaperMoney.abi';
import { PAPER_MONEY_ADDRESS, FACTORY_ADDRESS } from '../../address';

const BalanceBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 12px 0;
`;


function CheckPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { festival, seatNum, seatStr } = location.state;
    const { address, balance } = useSelector((state) => state.user);

    const approve = async () => {
        const MAX_INT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
        const params1 = { "bapp": { "name": "Ticketo" }, "type": "execute_contract", "transaction": { "to": "0x57ce059C55b71424299Ef4C4795e1756378B5Cfd", "value": "0", "abi": "{ \"inputs\": [ { \"name\": \"spender\", \"type\": \"address\" }, { \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }", "params": `[\"${FACTORY_ADDRESS}\", \"${MAX_INT}\"]` } }

        await axios.post(API_PREPARE, params1)
            .then((res) => {
                const { request_key } = res.data;
                window.location.href = (`${KLIP_URL}${request_key}`);

                let timer = setInterval(() => {
                    axios.get(`${API_RESULT}${request_key}`)
                        .then(async (res) => {
                            if (res.data.status === 'completed') {
                                const status = res.data.result.status;
                                if (status === 'success') {
                                    console.log(res);
                                    clearInterval(timer);
                                }
                            }
                        })
                }, 1000);
            })
            .catch((e) => console.log(e));
    }

    const buyTicket = async () => {
        const params2 = { "bapp": { "name": "Ticketo" }, "type": "execute_contract", "transaction": { "to": "0x7904065DFE74FDED486f5C85BF45ba308b83bC35", "value": "0", "abi": "{ \"inputs\": [ { \"name\": \"_index\", \"type\": \"uint256\" }, { \"name\": \"_schedule\", \"type\": \"uint256\" }, { \"name\": \"_seat\", \"type\": \"uint80\" } ], \"name\": \"buyTicket\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }", "params": `[\"${festival.index}\", \"${festival.schedule}\", \"${seatNum}\"]` } }

        await axios.post(API_PREPARE, params2)
            .then((res) => {
                const { request_key } = res.data;
                window.location.href = (`${KLIP_URL}${request_key}`);

                let timer = setInterval(() => {
                    axios.get(`${API_RESULT}${request_key}`)
                        .then(async (res) => {
                            if (res.data.status === 'completed') {
                                const status = res.data.result.status;
                                if (status === 'success') {
                                    console.log(res);
                                    clearInterval(timer);
                                }
                            }
                        })
                }, 1000);
            })
            .catch((e) => console.log(e));
    }

    const onClickPay = async () => {
        // allowance
        // const caver = new Caver(new Caver.providers.HttpProvider(process.env.REACT_APP_KLAYTN_MAINNET_NODE_URI));
        // console.log(address);
        // const paperMoneyContract = new caver.klay.Contract(PaperMoneyAbi, PAPER_MONEY_ADDRESS);
        // const res = await paperMoneyContract.methods.approve("0x7904065DFE74FDED486f5C85BF45ba308b83bC35", caver.utils.convertToPeb(festival.price * 10, 'KLAY')).send({ from: address, gas: 8000000, }).then((res) => console.log(res)).catch((e) => console.log(e));
        // console.log(res);
        await approve();
        await buyTicket();
    }

    return (
        <LayoutNoFooter style={{ overflow: 'hidden' }}>
            <div style={{ position: 'relative', backgroundColor: 'black', zIndex: '-1' }}>
                <div style={{ overflow: 'hidden', width: '100%', height: '150px', position: 'relative', top: '-1vh', zIndex: '-1' }}>
                    <img src={festival.fullImg} alt='' style={{ filter: 'brightness(70%)', scale: '1.1', width: '100%' }} />
                </div>
                <div style={{ position: 'absolute', top: '10%', color: 'white', padding: '24px' }}>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '16px' }}>{festival.name}</h1>
                    <p style={{ marginBottom: '8px' }}>{festival.description}</p>
                    <p>{festival.schedule}</p>
                </div>
            </div>

            <LikeBottomSheet>
                <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ color: '#676767' }}>
                            Purchasing
                        </div>
                        <div>
                            <img src={XIcon} alt='' />
                        </div>
                    </div>

                    <div style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '12px', marginBottom: '12px' }}>Payment with $pUSD</div>
                    <div>Click the button below and proceed with the payment using $pUSD in the connected wallet.</div>

                    <BalanceBox>
                        <div>
                            <img src={WalletIcon} alt='' style={{ width: '24px' }} />
                        </div>
                        <div>My Balance</div>
                        <div style={{ border: '1px solid #d4d4d4', borderRadius: '4px', marginLeft: '8px' }}>
                            <BalanceBox>
                                <img src={CashIcon} alt='' style={{ width: '16px' }} />
                                <div style={{ fontWeight: 'bold', margin: '0 4px', fontSize: '20px' }}>
                                    {balance}
                                </div>
                                <div>
                                    pUSD
                                </div>
                            </BalanceBox>
                        </div>
                    </BalanceBox>


                    <BalanceBox>
                        <div>
                            <img src={TicketIcon} alt='' style={{ width: '24px' }} />
                        </div>
                        <div>Ticket Price</div>
                        <div style={{ border: '1px solid #d4d4d4', borderRadius: '4px', marginLeft: '8px' }}>
                            <BalanceBox>
                                <img src={CashIcon} alt='' style={{ width: '16px' }} />
                                <div style={{ fontWeight: 'bold', margin: '0 4px', fontSize: '20px' }}>
                                    {festival.price}
                                </div>
                                <div>
                                    pUSD
                                </div>
                            </BalanceBox>
                        </div>
                    </BalanceBox>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '48px', alignItems: 'center' }}>
                        <BackBtn onClick={() => navigate(-1)} style={{ marginLeft: '16px' }}>Back</BackBtn>
                        <NextBtn onClick={onClickPay}>Pay with $pUSD</NextBtn>
                    </div>

                </div>
            </LikeBottomSheet>
        </LayoutNoFooter >
    );
}

export default CheckPage;