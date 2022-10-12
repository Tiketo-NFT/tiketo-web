import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TicketPage from '../pages/TicketPage';
import FaucetPage from '../pages/FaucetPage';
import DetailPage from '../pages/DetailPage';
import AmountPage from '../pages/ticketing/AmountPage';
import DatePage from '../pages/ticketing/DatePage';
import SeatPage from '../pages/ticketing/SeatPage';
import CheckPage from '../pages/payment/CheckPage';
import SuccessPage from '../pages/payment/SuccessPage';
import FailPage from '../pages/payment/FailPage';

function MainNav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/faucet" element={<FaucetPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/amount" element={<AmountPage />} />
        <Route path="/date" element={<DatePage />} />
        <Route path="/seat" element={<SeatPage />} />
        <Route path="/check" element={<CheckPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainNav;