import React from 'react';
import {PriceDisplay, Price, Subtitle} from './styles/styles';

// import { Container } from './styles';

export default function PaymentDisplay({value}) {
  return (
    <PriceDisplay>
      <Price>R$ {value}</Price>
      <Subtitle>TOTAL A PAGAR</Subtitle>
    </PriceDisplay>
  );
}
