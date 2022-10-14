import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import FaucetIcon from '../assets/img/footer/Faucet.svg'
import HomeIcon from '../assets/img/footer/Home.svg'
import TicketIcon from '../assets/img/footer/Ticket.svg'
import FaucetSelectedIcon from '../assets/img/footer/FaucetSelected.svg'
import HomeSelectedIcon from '../assets/img/footer/HomeSelected.svg'
import TicketSelectedIcon from '../assets/img/footer/TicketSelected.svg'

const StyledFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    height: 48px;
    background-color: white;
    color: white;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 3;
`;

const IconDiv = styled.div`
    width: 80px;
    height: 40px;
    background-color: ${props => props.color || 'white'};
    border-radius: 4px;
    margin-left: 4px;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Footer() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <StyledFooter>
            <Link to='/faucet'>
                <IconDiv color={currentPath === '/faucet' ? '#F0F0F0' : ''}>
                    <img src={currentPath === '/faucet' ? FaucetSelectedIcon : FaucetIcon} alt='' />
                </IconDiv>
            </Link>
            <Link to='/'>
                <IconDiv>
                    <IconDiv color={currentPath === '/' ? '#F0F0F0' : ''}>
                        <img src={currentPath === '/' ? HomeSelectedIcon : HomeIcon} alt='' />
                    </IconDiv>
                </IconDiv>
            </Link>
            <Link to='/ticket'>
                <IconDiv>
                    <IconDiv color={currentPath === '/ticket' ? '#F0F0F0' : ''}>
                        <img src={currentPath === '/ticket' ? TicketSelectedIcon : TicketIcon} alt='' />
                    </IconDiv>
                </IconDiv>
            </Link>
        </StyledFooter>
    );
}

export default Footer;