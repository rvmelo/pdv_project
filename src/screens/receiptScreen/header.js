import React, {memo} from 'react';
import {
  HeaderContainer,
  HeaderText,
  BackButton,
  BackImage,
} from './styles/styles';

function Header({handlePaymentScreen}) {
  return (
    <HeaderContainer>
      <BackButton onPress={handlePaymentScreen}>
        <BackImage />
      </BackButton>
      <HeaderText>PAGAMENTO REALIZADO COM SUCESSO</HeaderText>
    </HeaderContainer>
  );
}

export default memo(Header);
