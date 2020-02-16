import React, {useState, useCallback} from 'react';

// import { Container } from './styles';

import PaymentScreen from '../paymentScreen/paymentScreen';
import ReceiptScreen from '../receiptScreen/receiptScreen';

export default function PDV() {
  const [displayReceipt, setDisplayReceipt] = useState(false);
  const [payment, setPayment] = useState({value: '0,00', option: '', date: ''});

  const handleReceiptScreen = useCallback(
    option => {
      const today = new Date();
      const date =
        today.getDate() +
        '/' +
        (today.getMonth() + 1) +
        '/' +
        today.getFullYear() +
        ' ' +
        today.getHours() +
        ':' +
        today.getMinutes() +
        ':' +
        today.getSeconds();

      setDisplayReceipt(true);
      setPayment({value: payment.value, option: option, date: date});
    },
    [payment.value],
  );

  const handlePaymentScreen = () => {
    setDisplayReceipt(false);
    setPayment({value: '0,00', option: '', date: ''});
  };

  return displayReceipt ? (
    <ReceiptScreen
      value={payment.value}
      option={payment.option}
      date={payment.date}
      handlePaymentScreen={handlePaymentScreen}
    />
  ) : (
    <PaymentScreen
      value={payment.value}
      handleReceiptScreen={handleReceiptScreen}
      setValue={setPayment}
    />
  );
}
