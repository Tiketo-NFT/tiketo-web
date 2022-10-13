import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../component/Layout';
import { Link } from 'react-router-dom';


function DetailPage() {
    const location = useLocation();
    const { festival } = location.state;

    return (
        <Layout>
            <div>
                <div>
                    <h1>{festival.name}</h1>
                    <img src={festival.fullImg} />
                    <p>{festival.price} pUSD</p>
                    <p>{festival.schedule}</p>
                    <p>{festival.description}</p>
                </div>
                <div>
                    <Link to='/ticketing' state={{ festival: festival }}>
                        <button>Buy Ticket</button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default DetailPage;