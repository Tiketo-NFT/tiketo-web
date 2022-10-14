import React from 'react';
import '../style/modal.css';
import Spinner from '../assets/spinner.svg'

function LoadingModal (props) {
  const { open } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main>
          <img src={Spinner} alt="로딩중" width="30%" />
          <p style={{margin:'20px', fontWeight:'bold', fontSize:'20px'}}>Sending Payment Transaction</p>
          <p>Please wait</p>
          </main>
        </section>
      ) : null}
    </div>
  );
}

export default LoadingModal;