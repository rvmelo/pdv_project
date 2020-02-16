import React, {useState, useCallback} from 'react';
import KeyboardButton from './keyboardButton';
import {
  KeyboardContainer,
  KeyboardRowContainer,
  KeyboardFillContainer,
} from './styles/styles';

export default function CustomKeyboard({value, setValue}) {
  const [cursorPosition, setCursorPosition] = useState(0);

  // splice(position in array(index), number of elements to be removed,
  // element1 added at position index, element2 added at position index+1)

  const add_char = useCallback(
    v => {
      let newValue = [...value];

      if (cursorPosition >= 5) {
        return;
      }

      if (cursorPosition === newValue.length) {
        newValue.splice(cursorPosition, 0, v);
        //change comma position
        newValue.splice(1, 1);
        newValue.splice(2, 0, ',');
        setValue({value: newValue});
        setCursorPosition(prev => prev + 1);
        return;
      }
      cursorPosition !== 1 //comma position
        ? newValue.splice(cursorPosition, 1, v)
        : newValue.splice(cursorPosition + 1, 1, v);
      cursorPosition !== 1 //comma position
        ? setCursorPosition(prev => prev + 1)
        : setCursorPosition(prev => prev + 2);

      setValue({value: newValue});
    },
    [cursorPosition, setValue, value],
  );

  const remove_char = useCallback(() => {
    let newValue = [...value];

    if (cursorPosition <= 0) {
      return;
    }

    const commaPosition = newValue.indexOf(',');

    cursorPosition - 1 !== commaPosition
      ? newValue.splice(cursorPosition - 1, 1, '0')
      : newValue.splice(cursorPosition - 2, 1);
    cursorPosition - 1 !== commaPosition
      ? setCursorPosition(prev => prev - 1)
      : setCursorPosition(prev => prev - 2);

    newValue.length <= 3 ? newValue.splice(0, 0, '0') : null;

    setValue({value: newValue});
  }, [cursorPosition, setValue, value]);

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
