import React from 'react';
import logo_white from '../assets/logo_white.png';
import { RiWallet3Line } from 'react-icons/ri';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const StyleHeader = styled.div`
    position: sticky;
    top: 0;
    width: 100%;

    background-color: #1a1a1a;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 76px;
`;

const StyleLogoPart = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 22px;
`;

const StyleBalancePart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    padding-top: 45px;
    font-weight: 900;
`;

function Header() {
    const {address, balance} = useSelector((state) => state.user);

    return (
        <StyleHeader>
            <StyleLogoPart>
                <img src={logo_white} style={{ width: '60px' }} />
                <h1 style={{ paddingTop: '15px' }}>Tiketo</h1>
            </StyleLogoPart>
            <StyleBalancePart>
                <RiWallet3Line style={{ fontSize: '18px', paddingBottom: 'px' }} />
                <p style={{ padding: '6px' }}>{Math.floor(balance * 100) / 100}</p>
                <p style={{ color: '#C2C2C2', fontStyle: 'italic' }}>pUSD</p>
            </StyleBalancePart>
        </StyleHeader>
    );
}

export default Header;