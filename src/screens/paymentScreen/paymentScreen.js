/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';

import CustomKeyboard from '../../components/customKeyboard';
import PaymentPanel from '../../components/paymentPanel';

import {
  PriceDisplay,
  Price,
  Subtitle,
  PaymentBackground,
} from './styles/styles';

const PaymentScreen = ({handleReceiptDisplay, value, setValue}) => {
  return (
    <PaymentBackground>
      <PriceDisplay>
        <Price>R$ {value}</Price>
        <Subtitle>TOTAL A PAGAR</Subtitle>
      </PriceDisplay>
      <CustomKeyboard value={value} setValue={setValue} />
      <PaymentPanel handleReceiptDisplay={handleReceiptDisplay} />
    </PaymentBackground>
  );
};

export default PaymentScreen;
