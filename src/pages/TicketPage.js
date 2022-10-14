import React, { useEffect, useState } from 'react';
import Layout from '../component/Layout';
import { Body, SubtitleBar } from './HomePage';
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import Caver from 'caver-js';
import example_tickets from '../assets/img/example_festivals/example_tickets';
import TicketInfoBox from '../component/TicketInfoBox';
import { BottomSheet } from 'react-spring-bottom-sheet';

import { TicketAbi } from '../abi/Ticket.abi';
import { FactoryAbi } from '../abi/Factory.abi';
import { TICKET_ADDRESS, FACTORY_ADDRESS } from '../address';

import 'react-spring-bottom-sheet/dist/style.css'
import TicketInfoBottomSheet from '../component/TicketInfoBottomSheet';
import { addFestival } from '../features/festival/festivalSlice';

const SEAT_NUMBER = ['01', '02', '03', '04', '05', '06', '07', '08',]
const SEAT_ALPHA = ['', 'A', 'B', 'C', 'D', 'E']

const caver = new Caver(new Caver.providers.HttpProvider('https://public-node-api.klaytnapi.com/v1/cypress'));
const ticketContract = new caver.klay.Contract(TicketAbi, TICKET_ADDRESS);
const factoryContract = new caver.klay.Contract(FactoryAbi, FACTORY_ADDRESS);

async function getUserTicketBalance(address) {
    return new Promise(resolve => {
        ticketContract.methods.balanceOf(address).call()
            .then(result => {
                resolve(result);
            })
    });
}

function TicketPage() {
    const { address, balance, tickets } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(tickets);
        getUserTicketBalance(address)
            .then(userTicketBalance => {
                if (userTicketBalance > tickets.length) {
                    async function fetchFestivalEach() {
                        const len = await ticketContract.methods.totalSupply().call();
                        for (let i = 0; i < len; i++) {
                            const ownerOf = await ticketContract.methods.ownerOf(i).call();
                            if (address === ownerOf) {
                                const ticketInfo = await ticketContract.methods.ticketInfos(i).call();
                                const festivalIndex = ticketInfo.index;
                                const seatNum = ticketContract.seat;
                                const festivalInfo = await factoryContract.methods.festivalInfos(festivalIndex).call();
                                const alphaIndex = parseInt(seatNum / 8) + 1;
                                const numIndex = seatNum % 8;
                                const pushedItem = {
                                    ticketInfo: ticketInfo,
                                    additionalInfo: {
                                        seatStr: SEAT_ALPHA[alphaIndex] + SEAT_NUMBER[numIndex],
                                        festival: festivalInfo,
                                    }
                                };
                                dispatch(addFestival(pushedItem));
                            }

                        }
                        fetchFestivalEach();
                    }
                }
            });
    }, []);

    const [selectedTicket, setSelectedTicket] = useState({});
    const [open, setOpen] = useState(false);
    function onDismiss() {
        setOpen(false)
    }

    console.log(tickets);


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