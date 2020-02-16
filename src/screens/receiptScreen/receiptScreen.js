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
  HeaderText,
  StyledButton,
  ButtonText,
  ButtonContainer,
  BackButton,
  BackImage,
  HeaderContainer,
} from './styles/styles';

export default function ReceiptScreen({
  value,
  option,
  date,
  handlePaymentScreen,
}) {
  return (
    <StyledLinearGradient>
      <HeaderContainer>
        <BackButton onPress={handlePaymentScreen}>
          <BackImage />
        </BackButton>
        <HeaderText>PAGAMENTO REALIZADO COM SUCESSO</HeaderText>
      </HeaderContainer>
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
      <ButtonContainer>
        <StyledButton>
          <ButtonText>CONFIRMAR</ButtonText>
        </StyledButton>
      </ButtonContainer>
    </StyledLinearGradient>
  );
}
