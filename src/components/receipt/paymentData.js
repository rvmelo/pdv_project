import React from 'react';
import {Price, PriceContainer, PaymentDisplay} from './styles/styles';

function PaymentData({value, option}) {
  return (
    <>
      <PriceContainer>
        <Price>R${value}</Price>
      </PriceContainer>
      <PaymentDisplay>{option}</PaymentDisplay>
    </>
  );
}

export default PaymentData;
