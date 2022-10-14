import { createSlice } from '@reduxjs/toolkit'
import Caver from 'caver-js';
import { PaperMoneyAbi } from '../../abi/PaperMoney.abi';
import { TicketAbi } from '../../abi/Ticket.abi';
import { FactoryAbi } from '../../abi/Factory.abi';
import { PAPER_MONEY_ADDRESS, TICKET_ADDRESS, FACTORY_ADDRESS } from '../../address';

const SEAT_NUMBER = ['01', '02', '03', '04', '05', '06', '07', '08',]
const SEAT_ALPHA = ['', 'A', 'B', 'C', 'D', 'E']

const initialState = {
  address: '',
  balance: 0,
  tickets: [],
}

const caver = new Caver(new Caver.providers.HttpProvider('https://public-node-api.klaytnapi.com/v1/cypress'));
const paperContract = new caver.klay.Contract(PaperMoneyAbi, PAPER_MONEY_ADDRESS);
const ticketContract = new caver.klay.Contract(TicketAbi, TICKET_ADDRESS);
const factoryContract = new caver.klay.Contract(FactoryAbi, FACTORY_ADDRESS);

async function getUserTickets(address) {
  let ticketList = []
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
      ticketList.push(pushedItem);
    }
  }

  return ticketList;
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { address, balance } = action.payload;
      state.address = address;
      state.balance = balance;
    },
    faucet: (state) => {
      state.balance -= 1
    },
    buyTicket: (state, action) => {
      const { ticketInfo, additionalInfo } = action.payload;
      console.log(ticketInfo)
      console.log(additionalInfo)
      state.tickets.push({ ticketInfo, additionalInfo });
    },
  },
})

export const { login, faucet, buyTicket } = userSlice.actions

export default userSlice.reducer