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

function PaymentPanel({handleReceiptDisplay}) {
  return (
    <PanelContainer>
      <SwiperContainer>
        <SwiperComponent>
          <IconContainer>
            <ICMoney
              width="30%"
              height="30%"
              onPress={() => {
                handleReceiptDisplay('Dinheiro');
              }}
            />
            <IconTitle>DINHEIRO</IconTitle>
          </IconContainer>
          <IconContainer>
            <ICDebit
              width="30%"
              height="30%"
              onPress={() => handleReceiptDisplay('Débito')}
            />
            <IconTitle>DÉBITO</IconTitle>
          </IconContainer>
          <IconContainer>
            <ICCredit
              width="30%"
              height="30%"
              onPress={() => handleReceiptDisplay('Crédito')}
            />
            <IconTitle>CRÉDITO</IconTitle>
          </IconContainer>
        </SwiperComponent>

        <SwiperComponent>
          <IconContainer>
            <ICCupom
              width="30%"
              height="30%"
              onPress={() => handleReceiptDisplay('Cupom')}
            />
            <IconTitle>CUPOM</IconTitle>
          </IconContainer>
          <IconContainer>
            <ICVR
              width="30%"
              height="30%"
              onPress={() => handleReceiptDisplay('V.R.')}
            />
            <IconTitle>V.R.</IconTitle>
          </IconContainer>
        </SwiperComponent>
      </SwiperContainer>
    </PanelContainer>
  );
}

export default memo(PaymentPanel);
