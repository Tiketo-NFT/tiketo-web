// import React, { useState } from 'react';
// import axios from 'axios';
// import { KLIP_URL, API_PREPARE, API_RESULT } from '../../api/apiLinks';
// import Caver from 'caver-js';
// import { PaperMoneyAbi } from '../../abi/PaperMoney.abi';
// import { FactoryAbi } from '../../abi/Factory.abi';
// import { FACTORY_ADDRESS, PAPER_MONEY_ADDRESS, TICKET_ADDRESS } from '../../address';
// import { useDispatch } from 'react-redux';
// import { login } from './userSlice';


// const caver = new Caver(new Caver.providers.HttpProvider(process.env.REACT_APP_KLAYTN_MAINNET_NODE_URI));
// const paperContract = new caver.klay.Contract(PaperMoneyAbi, PAPER_MONEY_ADDRESS);
// const factoryContract = new caver.klay.Contract(FactoryAbi, FACTORY_ADDRESS);

// const fetchUserTickets = async (address) => {
//   console.log(address);
// }


// export const ConnectWallet = async () => {
//   const dispatch = useDispatch();

//   const paramsLogin = { "bapp": { "name": "Ticketo" }, "callback": { "success": '', "fail": '' }, "type": "auth" }

//   await axios.post(API_PREPARE, paramsLogin)
//     .then((res) => {
//       const { request_key } = res.data;
//       window.location.href = (`${KLIP_URL}${request_key}`);

//       let timerId = setInterval(() => {
//         axios.get(`${API_RESULT}${request_key}`)
//           .then(async (res) => {
//             if (res.data.result) {
//               const address = res.data.result.klaytn_address
//               const balancePeb = await paperContract.methods.balanceOf(address).call();
//               const balance = caver.utils.convertFromPeb(balancePeb, 'KLAY');
//               dispatch(login({ address, balance }));
//               clearInterval(timerId);
//             }
//           })
//       }, 1000);
//     })
//     .catch((error) => console.log(error));
// }