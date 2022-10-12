import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Header () {
    const {userAddress} = useContext(UserContext);
    console.log(userAddress);
    return (
        <div>
            Header
        </div>
    );
}

export default Header;