import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import LayoutNoFooter from '../../component/LayoutNoFooter';
import { BackBtn, LikeBottomSheet, NextBtn } from '../TicketingPage';

import XIcon from '../../assets/img/XIcon.svg';
import WalletIcon from '../../assets/img/Wallet.svg';
import TicketIcon from '../../assets/img/Ticket.svg';
import CashIcon from '../../assets/img/Cash.png';

import { KLIP_URL, API_PREPARE, API_RESULT } from '../../api/apiLinks';
import { PAPER_MONEY_ADDRESS, FACTORY_ADDRESS } from '../../address';
import LoadingModal from '../../component/LoadingModal';
import { buyTicket } from '../../features/user/userSlice';

const BalanceBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 12px 0;
    `;

const MAX_INT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

function CheckPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { festival, seatNum, seatStr } = location.state;
    const { balance } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onClickApprove = async () => {
        setModalOpen(true);
// eslint-disable-next-line
        const params = { "bapp": { "name": "Ticketo" }, "type": "execute_contract", "transaction": { "to": `${PAPER_MONEY_ADDRESS}`, "value": "0", "abi": "{ \"inputs\": [ { \"name\": \"spender\", \"type\": \"address\" }, { \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }", "params": `[\"${FACTORY_ADDRESS}\", \"${MAX_INT}\"]` } }

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
                                    setModalOpen(false);
                                    clearInterval(timer);
                                }
                            }
                        })
                }, 1000);
            })
            .catch((e) => console.log(e));
    }

    const onClickPay = async () => {
        setModalOpen(true);
        // eslint-disable-next-line
        const params = { "bapp": { "name": "Ticketo" }, "type": "execute_contract", "transaction": { "to": `${FACTORY_ADDRESS}`, "value": "0", "abi": "{ \"inputs\": [ { \"name\": \"_index\", \"type\": \"uint256\" }, { \"name\": \"_schedule\", \"type\": \"uint256\" }, { \"name\": \"_seat\", \"type\": \"uint80\" } ], \"name\": \"buyTicket\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }", "params": `[\"${festival.index}\", \"${festival.schedule}\", \"${seatNum}\"]` } }

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
                                    setModalOpen(false);
                                    dispatch(buyTicket({
                                        ticketInfo: {
                                            index: festival.index,
                                            seat: seatNum,
                                            schedule: festival.schedule,
                                            price: festival.price,
                                        },
                                        additionalInfo: {
                                            seatStr,
                                            festival,
                                        }
                                    }))
                                    clearInterval(timer);
                                    navigate('/success', {
                                        state: {
                                            festival,
                                            seatStr,
                                            txHash: res.data.result.tx_hash,
                                        }
                                    });
                                } else if (status === 'error') {
                                    setModalOpen(false);
                                    clearInterval(timer);
                                    navigate('/fail');
                                }
                            }
                        })
                }, 1000);
            })
            .catch((e) => console.log(e));
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
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <img src={WalletIcon} alt='' style={{ width: '24px', marginRight: '8px' }} />
                            </div>
                            <div>My Balance</div>
                        </div>
                        <div style={{ border: '1px solid #d4d4d4', borderRadius: '4px', marginLeft: '8px' }}>
                            <BalanceBox>
                                <img src={CashIcon} alt='' style={{ width: '16px' }} />
                                <div style={{ fontWeight: 'bold', margin: '0 4px', fontSize: '20px' }}>
                                    {Math.round(balance)}
                                </div>
                                <div>
                                    pUSD
                                </div>
                            </BalanceBox>
                        </div>
                    </BalanceBox>


                    <BalanceBox>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <img src={TicketIcon} alt='' style={{ width: '24px', marginRight: '8px' }} />
                            </div>
                            <div>Ticket Price</div>
                        </div>
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
                        <div>
                            <NextBtn style={{ margin: '12px 0' }} onClick={onClickApprove}>Approve $pUSD</NextBtn>
                            <NextBtn style={{ margin: '12px 0' }} onClick={onClickPay}>Pay with $pUSD</NextBtn>
                        </div>
                    </div>
                    <LoadingModal open={modalOpen} />

                </div>
            </LikeBottomSheet>
        </LayoutNoFooter >
    );
}

export default CheckPage;