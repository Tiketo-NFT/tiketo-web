import React, { useState } from 'react';
import Layout from '../component/Layout';
import { Body, SubtitleBar } from './HomePage';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import example_tickets from '../assets/img/example_festivals/example_tickets';
import TicketInfoBox from '../component/TicketInfoBox';
import { BottomSheet } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css'
import TicketInfoBottomSheet from '../component/TicketInfoBottomSheet';


function TicketPage() {
    // const { tickets } = useSelector((state) => state.user.tickets);
    const [tickets, setTickets] = useState(example_tickets);
    const [selectedTicket, setSelectedTicket] = useState({});
    const [open, setOpen] = useState(false);
    function onDismiss() {
        setOpen(false)
    }
    return (
        <Layout>
            <Body>

                <SubtitleBar>
                    <p>My Tickets</p>
                    <FaSearch style={{ color: '#1E1E1E' }} />
                </SubtitleBar>
                {tickets.map((ticket) => (<TicketInfoBox key={ticket.index} ticket={ticket} setOpen={setOpen} setSelectedTicket={setSelectedTicket} />))}
            </Body>
            <BottomSheet onDismiss={onDismiss} open={open}>
                <TicketInfoBottomSheet festival={selectedTicket.festival} ticket={selectedTicket.ticket} />
            </BottomSheet>
        </Layout>
    );
}

export default TicketPage;