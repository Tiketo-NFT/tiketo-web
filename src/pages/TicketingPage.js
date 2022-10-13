import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../component/Layout';
import SeatBox from '../component/SeatBox';

function TicketingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { festival } = location.state;
  console.log(festival);
  return (
    <Layout>
      <div>
        <div>
          <h1>{festival.name}</h1>
          <h1>event summary</h1>
        </div>

        <div>
          <p>subtitle</p>
          <p>{festival.description}</p>
          <p>{festival.schedule}</p>
          <SeatBox />
          <p>summary</p>
          <p>1 Adult</p>
          <p>{festival.schedule}</p>
          <p>??? zone</p>
          <p>Total: {festival.price} pUSD</p>

          <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <Link to='/check'>
              <button>Next</button>
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default TicketingPage;