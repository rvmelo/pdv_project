import React, {memo} from 'react';
import {View} from 'react-native';
import {ButtonContainer, StyledButton, ButtonText} from './styles/styles';

function Footer() {
  return (
    <ButtonContainer>
      <StyledButton>
        <ButtonText>CONFIRMAR</ButtonText>
      </StyledButton>
    </ButtonContainer>
  );
}

export default memo(Footer);
