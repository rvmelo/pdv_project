import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import ICLogo from '../../../assets/Icones/ic_logo.svg';
import {fonts} from '../../theme/fonts/fonts';
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

export default function ReceiptScreen({paymentOption}) {
  return (
    <StyledLinearGradient>
      <StyledBackground>
        <EmptySpace />
        <ICLogo width="50%" height="20%" />

        <ReceiptTextBold>Eyemobile Tecnologia LTDA</ReceiptTextBold>
        <ReceiptText>Rua Airton Roberto de Oliveira</ReceiptText>
        <ReceiptText>Número 64</ReceiptText>

        <PriceContainer>
          <Price>R$30,00</Price>
        </PriceContainer>
        <PaymentDisplay>{paymentOption}</PaymentDisplay>
        <DateContainer>
          <DateDisplay>05/10/2019 18:00:00</DateDisplay>
        </DateContainer>
      </StyledBackground>
    </StyledLinearGradient>
  );
}
