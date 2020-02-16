import React from 'react';
import {StyledLinearGradient} from './styles/styles';

import Header from './header';
import Receipt from '../../components/receipt/receipt';
import Footer from './footer';

export default function ReceiptScreen({
  value,
  option,
  date,
  handlePaymentScreen,
}) {
  return (
    <StyledLinearGradient>
      <Header handlePaymentScreen={handlePaymentScreen} />
      <Receipt value={value} option={option} date={date} />
      <Footer />
    </StyledLinearGradient>
  );
}
