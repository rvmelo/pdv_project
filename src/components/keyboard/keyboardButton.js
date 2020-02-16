import React from 'react';
import {KeyboardButtonContainer, ButtonText, DeleteIcon} from './styles/styles';

function KeyboardButton({number, handleInput}) {
  return (
    <KeyboardButtonContainer onPress={handleInput}>
      {number === -1 ? <DeleteIcon /> : <ButtonText>{number}</ButtonText>}
    </KeyboardButtonContainer>
  );
}

export default KeyboardButton;
