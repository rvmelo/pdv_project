import React, {useState, useCallback} from 'react';

// import { Container } from './styles';

import PaymentScreen from '../paymentScreen/paymentScreen';
import ReceiptScreen from '../receiptScreen/receiptScreen';

export default function PDV() {
  const [displayReceipt, setDisplayReceipt] = useState(false);
  const [paymentOption, setPaymentOption] = useState('');

  const handleReceiptDisplay = useCallback(option => {
    setDisplayReceipt(true);
    setPaymentOption(option);
  }, []);

  return displayReceipt ? (
    <ReceiptScreen paymentOption={paymentOption} />
  ) : (
    <PaymentScreen handleReceiptDisplay={handleReceiptDisplay} />
  );
}
