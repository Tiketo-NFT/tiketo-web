import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

function CheckPage () {
    const location = useLocation();
    const navigate = useNavigate();
    const { festival, seat } = location.state;
    console.log(festival, seat);
    return (
        <div>
            CheckPage
        </div>
    );
}

export default CheckPage;