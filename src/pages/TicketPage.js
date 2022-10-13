import React, { useState } from 'react';
import Layout from '../component/Layout';
import { Body, SubtitleBar } from './HomePage';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import example_tickets from '../assets/img/example_festivals/example_tickets';
import TicketInfoBox from '../component/TicketInfoBox';



function TicketPage() {
    // const { tickets } = useSelector((state) => state.user.tickets);
    const [tickets, setTickets] = useState(example_tickets);
    return (
        <Layout>
            <Body>

                <SubtitleBar>
                    <p>My Tickets</p>
                    <FaSearch style={{ color: '#1E1E1E' }} />
                </SubtitleBar>
                {tickets.map((ticket) => (<TicketInfoBox key={ticket.index} ticket={ticket} />))}
            </Body>
        </Layout>
    );
}

export default TicketPage;