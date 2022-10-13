import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TicketPage from '../pages/TicketPage';
import FaucetPage from '../pages/FaucetPage';
import DetailPage from '../pages/DetailPage';
import CheckPage from '../pages/payment/CheckPage';
import SuccessPage from '../pages/payment/SuccessPage';
import FailPage from '../pages/payment/FailPage';
import TicketingPage from '../pages/TicketingPage';

function MainNav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/faucet" element={<FaucetPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/ticketing" element={<TicketingPage />} />
        <Route path="/check" element={<CheckPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainNav;