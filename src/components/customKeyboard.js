import React from 'react';
import KeyboardButton from '../components/keyboardButton';
import {
  KeyboardContainer,
  KeyboardRowContainer,
  KeyboardFillContainer,
} from '../styles/styles';

export default function CustomKeyboard({add_char, remove_char}) {
  return (
    <KeyboardContainer>
      <KeyboardRowContainer>
        <KeyboardButton number={1} handleInput={() => add_char(1)} />
        <KeyboardButton number={2} handleInput={() => add_char(2)} />
        <KeyboardButton number={3} handleInput={() => add_char(3)} />
      </KeyboardRowContainer>
      <KeyboardRowContainer>
        <KeyboardButton number={4} handleInput={() => add_char(4)} />
        <KeyboardButton number={5} handleInput={() => add_char(5)} />
        <KeyboardButton number={6} handleInput={() => add_char(6)} />
      </KeyboardRowContainer>
      <KeyboardRowContainer>
        <KeyboardButton number={7} handleInput={() => add_char(7)} />
        <KeyboardButton number={8} handleInput={() => add_char(8)} />
        <KeyboardButton number={9} handleInput={() => add_char(9)} />
      </KeyboardRowContainer>
      <KeyboardRowContainer>
        <KeyboardFillContainer />
        <KeyboardButton number={0} handleInput={() => add_char(0)} />
        <KeyboardButton number={-1} handleInput={() => remove_char()} />
      </KeyboardRowContainer>
    </KeyboardContainer>
  );
}
