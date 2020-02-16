import React from 'react';
import ICLogo from '../../../assets/Icones/ic_logo.svg';
import {
  EmptySpace,
  StyledLinearGradient,
  StyledBackground,
  ReceiptTextBold,
  ReceiptText,
  PriceContainer,
  Price,
  DateContainer,
  PaymentDisplay,
  DateDisplay,
} from './styles/styles';

export default function ReceiptScreen({value, option, date}) {
  return (
    <StyledLinearGradient>
      <StyledBackground>
        <EmptySpace />
        <ICLogo width="50%" height="20%" />

        <ReceiptTextBold>Eyemobile Tecnologia LTDA</ReceiptTextBold>
        <ReceiptText>Rua Airton Roberto de Oliveira</ReceiptText>
        <ReceiptText>Número 64</ReceiptText>

        <PriceContainer>
          <Price>R${value}</Price>
        </PriceContainer>
        <PaymentDisplay>{option}</PaymentDisplay>
        <DateContainer>
          <DateDisplay>{date}</DateDisplay>
        </DateContainer>
      </StyledBackground>
    </StyledLinearGradient>
  );
}
