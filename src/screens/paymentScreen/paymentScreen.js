/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {fonts} from '../../theme/fonts/fonts';

import CustomKeyboard from '../../components/customKeyboard';
import PaymentPanel from '../../components/paymentPanel';

import {PriceDisplay, PaymentBackground} from './styles/styles';

const PaymentScreen = ({handleReceiptDisplay}) => {
  const [value, setValue] = useState('0,00');
  const [cursorPosition, setCursorPosition] = useState(0);

  // splice(position in array(index), number of elements to be removed,
  // element1 added at position index, element2 added at position index+1)

  const add_char = v => {
    let newValue = [...value];

    if (cursorPosition >= 5) {
      return;
    }

    if (cursorPosition === newValue.length) {
      newValue.splice(cursorPosition, 0, v);
      //change comma position
      newValue.splice(1, 1);
      newValue.splice(2, 0, ',');
      setValue(newValue);
      setCursorPosition(prev => prev + 1);
      return;
    }
    cursorPosition !== 1 //comma position
      ? newValue.splice(cursorPosition, 1, v)
      : newValue.splice(cursorPosition + 1, 1, v);
    cursorPosition !== 1 //comma position
      ? setCursorPosition(prev => prev + 1)
      : setCursorPosition(prev => prev + 2);

    setValue(newValue);
  };

  const remove_char = () => {
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

    setValue(newValue);
  };

  return (
    <PaymentBackground>
      <PriceDisplay>
        <Text>R$ {value}</Text>
      </PriceDisplay>
      <CustomKeyboard add_char={add_char} remove_char={remove_char} />
      <PaymentPanel handleReceiptDisplay={handleReceiptDisplay} />
    </PaymentBackground>
  );
};

export default PaymentScreen;
