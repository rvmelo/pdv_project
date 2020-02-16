import React from 'react';
import {DateContainer, DateDisplay} from './styles/styles';

export default function ReceiptFooter({date}) {
  return (
    <DateContainer>
      <DateDisplay>{date}</DateDisplay>
    </DateContainer>
  );
}
