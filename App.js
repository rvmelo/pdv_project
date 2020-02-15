/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {fonts} from './src/theme/fonts/fonts';

import PDV from './src/screens/pdv/pdv';

import CustomKeyboard from './src/components/customKeyboard';
import PaymentPanel from './src/components/paymentPanel';

const App = () => {
  const [value, setValue] = useState('0,00');
  const [cursorPosition, setCursorPosition] = useState(0);

  const add_char = v => {
    let newValue = [...value];

    const commaPosition = newValue.indexOf(',');

    newValue.splice(commaPosition, 1);
    cursorPosition !== 1
      ? newValue.splice(cursorPosition, 1, v)
      : newValue.splice(cursorPosition, 0, v);

    newValue.splice(commaPosition, 0, ',');

    setValue(newValue);

    setCursorPosition(cursorPosition + 1);
  };

  const remove_char = v => {
    let newValue = [...value];
    const commaPosition = newValue.indexOf(',');

    newValue.splice(commaPosition, 1);

    cursorPosition !== 1
      ? newValue.splice(cursorPosition, 1, '0')
      : newValue.splice(cursorPosition, 1);

    newValue.splice(commaPosition, 0, ',');

    setValue(newValue);
    setCursorPosition(cursorPosition - 1);
  };
  const handleInput = v => {
    let newValue = [...value];

    console.log('cursor position: ' + cursorPosition);

    //remove char

    if (v === -1) {
      if (cursorPosition === 0 || cursorPosition === 1) {
        setValue('0,00');
        setCursorPosition(0);
        return;
      }

      if (cursorPosition !== 2) {
        newValue.splice(cursorPosition, 1, '0');
      } else if (cursorPosition === 2) {
        newValue.splice(cursorPosition - 1, 1, '0');
      }
      setValue(newValue);
      setCursorPosition(cursorPosition - 1);
      return;
    }

    //add char

    if (cursorPosition >= 4 || v === -1) {
      return;
    }

    if (cursorPosition === 1) {
      // x,00 -> xx,00
      console.log('1');
      value.length < 5
        ? newValue.splice(cursorPosition, 0, v)
        : newValue.splice(cursorPosition, 1, v);
    } else if (cursorPosition >= 2) {
      // xx,00 -> xx,x0
      console.log('2');
      newValue.splice(cursorPosition + 1, 1, v);
    } else {
      // 0,00 -> x,00
      console.log('3');
      newValue.splice(cursorPosition, 1, v);
    }

    setValue(newValue);
    console.log('adding 1');
    setCursorPosition(cursorPosition + 1);
  };

  return <PDV />;

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       backgroundColor: 'purple',
  //     }}>
  //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //       <Text>R$ {value}</Text>
  //     </View>
  //     <CustomKeyboard handleInput={handleInput} />
  //     <PaymentPanel />
  //   </View>
  // );
};

export default App;
