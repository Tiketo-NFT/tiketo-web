import React, { useEffect, useState } from 'react';
import Layout from '../component/Layout';
import { Body, SubtitleBar } from './HomePage';
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import Caver from 'caver-js';
import TicketInfoBox from '../component/TicketInfoBox';
import { BottomSheet } from 'react-spring-bottom-sheet';

import { TicketAbi } from '../abi/Ticket.abi';
import { FactoryAbi } from '../abi/Factory.abi';
import { TICKET_ADDRESS, FACTORY_ADDRESS } from '../address';

import { nanoid } from '@reduxjs/toolkit';

import 'react-spring-bottom-sheet/dist/style.css'
import TicketInfoBottomSheet from '../component/TicketInfoBottomSheet';
import { addTicket } from '../features/user/userSlice';

const SEAT_NUMBER = ['01', '02', '03', '04', '05', '06', '07', '08',]
const SEAT_ALPHA = ['', 'A', 'B', 'C', 'D', 'E']

const caver = new Caver(new Caver.providers.HttpProvider('https://klaytn01.fandom.finance/'));
const ticketContract = new caver.klay.Contract(TicketAbi, TICKET_ADDRESS);
const factoryContract = new caver.klay.Contract(FactoryAbi, FACTORY_ADDRESS);

function TicketPage() {
    const { address, tickets } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    let ticketList = [];
    const [paramTickets, setParamTickets] = useState();
    const [selectedTicket, setSelectedTicket] = useState({});
    const [open, setOpen] = useState(false);
    function onDismiss() {
        setOpen(false)
    }

    useEffect(() => {
        async function fetch() {
            const userTicketBalance = await ticketContract.methods.balanceOf(address).call()
            if (userTicketBalance > tickets.length) {
                const len = await ticketContract.methods.totalSupply().call();
                for (let i = 0; i < len; i++) {
                    const ownerOf = await ticketContract.methods.ownerOf(i).call();
                    if (address === ownerOf) {
                        const ticketInfo = await ticketContract.methods.ticketInfos(i).call();
                        const festivalIndex = ticketInfo.index;
                        const seatNum = ticketInfo.seat;
                        const festivalInfo = await factoryContract.methods.festivalInfos(festivalIndex).call();
                        const alphaIndex = parseInt(seatNum / 8) + 1;
                        const numIndex = seatNum % 8;
                        const pushedItem = {
                            ticketInfo: {
                                index: festivalIndex,
                                seat: seatNum,
                                schedule: ticketInfo.schedule,
                                price: ticketInfo.price,
                            },
                            additionalInfo: {
                                seatStr: `${SEAT_ALPHA[alphaIndex]}${SEAT_NUMBER[numIndex]}`,
                                festival: festivalInfo,
                            }
                        };
                        dispatch(addTicket(pushedItem));
                        ticketList.push(pushedItem);
                    }
                }
            } else {
                // eslint-disable-next-line
                ticketList = tickets;
            }
        }

        fetch();
        setTimeout(() => setParamTickets(ticketList), 1000);
    }, [])


    return (
        <Layout>
            {paramTickets && <Body>
                <SubtitleBar>
                    <p>My Tickets</p>
                    <FaSearch style={{ color: '#1E1E1E' }} />
                </SubtitleBar>
                {paramTickets.map((ticket) => (<TicketInfoBox key={nanoid()} ticket={ticket} setOpen={setOpen} setSelectedTicket={setSelectedTicket} />))}
            </Body>}

            <BottomSheet onDismiss={onDismiss} open={open}>
                <TicketInfoBottomSheet style={{zIndex:5}} festival={selectedTicket.festival} seatStr={selectedTicket.seatStr} onClick={onDismiss} />
            </BottomSheet>
        </Layout>
    );
}

export default TicketPage;