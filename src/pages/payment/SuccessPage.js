import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import LayoutNoFooter from '../../component/LayoutNoFooter';

import XIcon from '../../assets/img/XIcon.svg';
import { NextBtn } from '../TicketingPage';

const LikeBottomSheet = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
  top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-grow: 1;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
    color: #676767;
    margin: 4px 0;
`;


function SuccessPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { festival, seatStr, txHash } = location.state;

    return (
        <LayoutNoFooter>
            <div style={{ backgroundColor: 'black', height: '20px', width: '100%' }}></div>
            <LikeBottomSheet style={{backgroundColor:'#f0f0f0'}}>
                <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div />
                        <div>
                            <img src={XIcon} alt='' />
                        </div>
                    </div>
                </div>

                <FlexBox>
                    <FlexBox style={{fontWeight:'bold', fontSize:'32px', marginBottom:'24px'}}>
                    <div>The payment</div>
                    <div>has been successful!</div>
                    </FlexBox>
                    <div style={{color:'#676767'}}>Ticket Information</div>
                    <img src={festival.fullImg} style={{ width: '80%', margin: '18px 0' }} alt='' />

                    <Text>{festival.name}</Text>
                    <Text>{festival.description}</Text>
                    <Text>{festival.schedule}</Text>

                    <Text style={{marginTop:'18px'}}>1 Adult, {festival.schedule}, {seatStr}</Text>
                    <Text>{festival.price} pUSD</Text>

                    <FlexBox style={{width:'80%', border:'1px solid', borderColor:'#f0f0f0', padding:'16px', margin:'12px 0', backgroundColor:'white', borderRadius: '8px'}}>
                        <div>You can check your tx in Klaytnscope.</div>
                        <NextBtn onClick={() => {
                            window.location.href = 'https://scope.klaytn.com/tx/'+txHash;
                        }} style={{margin:'12px 0', backgroundColor:'#676767'}}>Go to Klaytnscope</NextBtn>
                    </FlexBox>
                </FlexBox>
                <div style={{display:'flex', justifyContent:'space-between', padding:'0 12px'}}>
                    <div />
                <NextBtn onClick={() => {
                    navigate('/ticket');
                }} style={{padding:'20px', boxShadow: '1px 2px 5px black'}}>View Ticket</NextBtn>
                </div>
            </LikeBottomSheet>
        </LayoutNoFooter>
    );
}

export default SuccessPage;