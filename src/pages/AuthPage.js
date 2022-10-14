import logo from '../assets/logo.png';
import KlipLogin from '../assets/img/KlipLogin.png';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { KLIP_URL, API_PREPARE, API_RESULT } from '../api/apiLinks';
import Caver from 'caver-js';
import { PaperMoneyAbi } from '../abi/PaperMoney.abi';
import { FactoryAbi } from '../abi/Factory.abi';
import { FACTORY_ADDRESS, PAPER_MONEY_ADDRESS, TICKET_ADDRESS } from '../address';
import { login } from '../features/user/userSlice';


// const caver = new Caver(new Caver.providers.HttpProvider(process.env.REACT_APP_KLAYTN_MAINNET_NODE_URI));
const caver = new Caver(new Caver.providers.HttpProvider('https://public-node-api.klaytnapi.com/v1/cypress'));
const paperContract = new caver.klay.Contract(PaperMoneyAbi, PAPER_MONEY_ADDRESS);
const factoryContract = new caver.klay.Contract(FactoryAbi, FACTORY_ADDRESS);


const StyledAuth = styled.div`
  width: 100%;
  height: 100vh;
  margin:0;
  padding:10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function AuthPage() {
  const dispatch = useDispatch();

  const ConnectWallet = async () => {
    const paramsLogin = { "bapp": { "name": "Ticketo" }, "callback": { "success": '', "fail": '' }, "type": "auth" }

    await axios.post(API_PREPARE, paramsLogin)
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
                dispatch(login({ address, balance }));
                clearInterval(timerId);
              }
            })
        }, 1000);
      })
      .catch((error) => console.log(error));
  }

  return (
    <StyledAuth>
      <img src={logo} alt='logo' style={{ width: 60 }} />
      <h1 style={{ marginBottom: 100 }}>Ticketo</h1>
      <img onClick={ConnectWallet} src={KlipLogin} style={{ width: 280, marginBottom: 200 }} />
    </StyledAuth>
  )
}