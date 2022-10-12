import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

function Footer() {
    return (
        <StyledFooter>
            <Link to='/faucet'>Faucet</Link>
            <Link to='/'>Home</Link>
            <Link to='/ticket'>Ticket</Link>
        </StyledFooter>
    );
}

export default Footer;