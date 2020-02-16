import React from 'react';
import {StyledBackground} from './styles/styles';
import ReceiptHeader from './receiptHeader';
import PaymentData from './paymentData';
import ReceiptFooter from './receiptFooter';

export default function Receipt({value, option, date}) {
  return (
    <StyledBackground>
      <ReceiptHeader />
      <PaymentData value={value} option={option} />
      <ReceiptFooter date={date} />
    </StyledBackground>
  );
}
