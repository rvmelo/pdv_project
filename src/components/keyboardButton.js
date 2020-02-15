import React from 'react';
import {TouchableOpacity} from 'react-native';
import {KeyboardButtonContainer, ButtonText} from '../styles/styles';

// import { Container } from './styles';

export default function KeyboardButton({number, handleInput}) {
  return (
    <KeyboardButtonContainer onPress={handleInput}>
      <ButtonText>{number}</ButtonText>
    </KeyboardButtonContainer>
  );
}
