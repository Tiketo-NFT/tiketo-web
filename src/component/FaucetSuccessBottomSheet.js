import React from 'react';
import { Box } from '../pages/FaucetPage';
import { useNavigate } from 'react-router-dom';


import XIcon from '../assets/img/XIcon.svg';
import { FlexBox } from '../pages/payment/SuccessPage';
import { NextBtn } from '../pages/TicketingPage';


function FaucetSuccessBottomSheet({ onClick, txHash }) {
  const navigate = useNavigate();
  return (
    <Box style={{ backgroundColor: '#f0f0f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div />
        <div onClick={onClick}>
          <img src={XIcon} alt='' style={{ marginRight: '16px', marginTop: '16px' }} />
        </div>
      </div>
      <Box>
        <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '4px 0' }}>The transaction</div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '4px 0' }}>has been successful!</div>
      </Box>
      <FlexBox style={{ width: '80%', border: '1px solid', borderColor: '#f0f0f0', padding: '16px', margin: '30px 0', backgroundColor: 'white', borderRadius: '8px' }}>
        <div>You can check your tx in Klaytnscope.</div>
        <NextBtn onClick={() => {
          window.location.href = 'https://scope.klaytn.com/tx/' + txHash;
        }} style={{ margin: '12px 0', backgroundColor: '#676767' }}>Go to Klaytnscope</NextBtn>
      </FlexBox>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 12px', margin: '30px' }}>
        <div />
        <NextBtn onClick={() => {
          navigate('/');
        }} style={{ padding: '20px', boxShadow: '1px 2px 5px black' }}>Go Home</NextBtn>
      </div>
    </Box>
  );
}

export default FaucetSuccessBottomSheet;