import React from 'react';
import { useLocation } from 'react-router-dom';


function SuccessPage () {
    const location = useLocation();
    const {festival, seatStr, txHash} = location.state;
    console.log(festival, seatStr, txHash)

    return (
        <div>
            SuccessPage
        </div>
    );
}

export default SuccessPage;