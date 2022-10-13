import axios from 'axios';
import { createContext, useState } from 'react';
import { KLIP_URL, API_PREPARE, API_RESULT } from '../api/apiLinks';
import Caver from 'caver-js';
import { PaperMoneyAbi } from '../abi/PaperMoney.abi';
import { FactoryAbi } from '../abi/Factory.abi';
import { FACTORY_ADDRESS, PAPER_MONEY_ADDRESS, TICKET_ADDRESS } from '../address';


const caver = new Caver(new Caver.providers.HttpProvider(process.env.REACT_APP_KLAYTN_MAINNET_NODE_URI));
const paperContract = new caver.klay.Contract(PaperMoneyAbi, PAPER_MONEY_ADDRESS);
const factoryContract = new caver.klay.Contract(FactoryAbi, FACTORY_ADDRESS);

export const UserContext = createContext({
  setIsLoading: () => { },
  setUserAddress: () => { },
  setUserBalance: () => { },
  setUserTickets: () => { },
});

export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState('usd');
  const [userBalance, setUserBalance] = useState(0);
  const [userTickets, setUserTickets] = useState([]);

  const paramsConnect = { "bapp": { "name": "Ticketo" }, "callback": { "success": '', "fail": '' }, "type": "auth" }

  const connect = async () => {
    setIsLoading(true);
    await axios.post(API_PREPARE, paramsConnect)
      .then((res) => {
        const { request_key } = res.data;
        window.location.href = (`${KLIP_URL}${request_key}`);

        let timerId = setInterval(() => {
          axios.get(`${API_RESULT}${request_key}`)
            .then(async (res) => {
              if (res.data.result) {
                const address = res.data.result.klaytn_address
                const balancePeb = await paperContract.methods.balanceOf(address).call();
                const balance = caver.utils.convertFromPeb(balancePeb, 'KLAY');
                setUserAddress(address);
                setUserBalance(balance);
                clearInterval(timerId);
              }
            })
        }, 1000);
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  }

  return (
    <UserContext.Provider value={{ isLoading, userAddress, userBalance, userTickets, connect }}>
      {children}
    </UserContext.Provider>
  )
}