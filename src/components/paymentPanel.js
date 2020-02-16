import React, {memo} from 'react';

import {
  PanelContainer,
  OptionsContainer,
  SwiperComponent,
  SwiperContainer,
  IconContainer,
  IconTitle,
} from '../styles/styles';
import Swiper from 'react-native-swiper';

import ICCupom from '../../assets/Icones/ic_cupom.svg';
import ICCredit from '../../assets/Icones/ic_credit.svg';
import ICDebit from '../../assets/Icones/ic_debit.svg';
import ICMoney from '../../assets/Icones/ic_money.svg';
import ICVR from '../../assets/Icones/ic_vr.svg';

function PaymentPanel({handleReceiptScreen}) {
  return (
    <PanelContainer>
      <SwiperContainer>
        <SwiperComponent>
          <IconContainer>
            <ICMoney
              width="30%"
              height="30%"
              onPress={() => {
                handleReceiptScreen('Dinheiro');
              }}
            />
            <IconTitle>DINHEIRO</IconTitle>
          </IconContainer>
          <IconContainer>
            <ICDebit
              width="30%"
              height="30%"
              onPress={() => handleReceiptScreen('Débito')}
            />
            <IconTitle>DÉBITO</IconTitle>
          </IconContainer>
          <IconContainer>
            <ICCredit
              width="30%"
              height="30%"
              onPress={() => handleReceiptScreen('Crédito')}
            />
            <IconTitle>CRÉDITO</IconTitle>
          </IconContainer>
        </SwiperComponent>

        <SwiperComponent>
          <IconContainer>
            <ICCupom
              width="30%"
              height="30%"
              onPress={() => handleReceiptScreen('Cupom')}
            />
            <IconTitle>CUPOM</IconTitle>
          </IconContainer>
          <IconContainer>
            <ICVR
              width="30%"
              height="30%"
              onPress={() => handleReceiptScreen('V.R.')}
            />
            <IconTitle>V.R.</IconTitle>
          </IconContainer>
        </SwiperComponent>
      </SwiperContainer>
    </PanelContainer>
  );
}

export default memo(PaymentPanel);
