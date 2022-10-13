import { useLocation, useNavigate, Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


import LayoutNoFooter from '../../component/LayoutNoFooter';
import { BackBtn, LikeBottomSheet, NextBtn } from '../TicketingPage';

import XIcon from '../../assets/img/XIcon.svg';
import WalletIcon from '../../assets/img/Wallet.svg';
import TicketIcon from '../../assets/img/Ticket.svg';
import CashIcon from '../../assets/img/Cash.png';

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
                        <Link to='/check' >
                            <NextBtn>Pay with $pUSD</NextBtn>
                        </Link>
                    </div>

                </div>
            </LikeBottomSheet>
        </LayoutNoFooter >
    );
}

export default CheckPage;