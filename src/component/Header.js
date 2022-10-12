import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import logo from '../assets/logo.png';
import { FlexRow } from '../style/styles';


function Header() {
    const { userAddress, userBalance } = useContext(UserContext);
    return (
        <FlexRow>
            <FlexRow>
                <img src={logo} style={{ width: '40px' }} />
                <h1>Ticketo</h1>
            </FlexRow>
            <p>{userBalance} pUSD</p>
            <p>{`${userAddress.substr(0, 6)}...`}</p>
        </FlexRow>
    );
}

export default Header;