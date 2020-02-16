import React, {memo} from 'react';
import {EmptySpace, ReceiptTextBold, ReceiptText} from './styles/styles';
import ICLogo from '../../../assets/Icones/ic_logo.svg';

function ReceiptHeader() {
  return (
    <>
      <EmptySpace />
      <ICLogo width="50%" height="20%" />
      <ReceiptTextBold>Eyemobile Tecnologia LTDA</ReceiptTextBold>
      <ReceiptText>Rua Airton Roberto de Oliveira</ReceiptText>
      <ReceiptText>Número 64</ReceiptText>
    </>
  );
}

export default memo(ReceiptHeader);
