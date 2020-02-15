import React from 'react';

import {
  PanelContainer,
  OptionsContainer,
  SwiperComponent,
  SwiperContainer,
} from '../styles/styles';
import Swiper from 'react-native-swiper';

import ICCupom from '../../assets/Icones/ic_cupom.svg';
import ICCredit from '../../assets/Icones/ic_credit.svg';
import ICDebit from '../../assets/Icones/ic_debit.svg';
import ICMoney from '../../assets/Icones/ic_money.svg';
import ICVR from '../../assets/Icones/ic_vr.svg';

export default function PaymentPanel({handleReceiptDisplay}) {
  return (
    <PanelContainer>
      <SwiperContainer>
        <SwiperComponent>
          <ICMoney
            width="20%"
            height="20%"
            onPress={() => {
              handleReceiptDisplay('Dinheiro');
            }}
          />

          <ICDebit
            width="20%"
            height="20%"
            onPress={() => handleReceiptDisplay('Débito')}
          />

          <ICCredit
            width="20%"
            height="20%"
            onPress={() => handleReceiptDisplay('Crédito')}
          />
        </SwiperComponent>

        <SwiperComponent>
          <ICCupom
            width="20%"
            height="20%"
            onPress={() => handleReceiptDisplay('Cupom')}
          />

          <ICVR
            width="20%"
            height="20%"
            onPress={() => handleReceiptDisplay('V.R.')}
          />
        </SwiperComponent>
      </SwiperContainer>
    </PanelContainer>
  );
}
