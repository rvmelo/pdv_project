/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import CustomKeyboard from '../../components/keyboard/customKeyboard';
import PaymentPanel from '../../components/payment/paymentPanel';
import PaymentDisplay from '../../components/payment/paymentDisplay';

import {PaymentBackground} from './styles/styles';

const PaymentScreen = ({handleReceiptScreen, value, setValue}) => {
  return (
    <PaymentBackground>
      <PaymentDisplay value={value} />
      <CustomKeyboard value={value} setValue={setValue} />
      <PaymentPanel handleReceiptScreen={handleReceiptScreen} />
    </PaymentBackground>
  );
};

export default PaymentScreen;
