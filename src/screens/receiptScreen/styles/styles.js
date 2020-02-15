import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../../theme/fonts/fonts';

export const StyledLinearGradient = styled(LinearGradient).attrs({
  colors: ['#14d1af', '#c071d5'],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledBackground = styled.ImageBackground.attrs({
  imageStyle: {width: '100%', height: '100%', resizeMode: 'contain'},
  source: require('../../../../assets/Images/receiptBackground.png'),
})`
  width: 60%;
  height: 60%;
  align-items: center;
  justify-content: center;
`;

export const ReceiptTextBold = styled.Text`
  height: 5%;
  font-family: ${fonts.tahomaBold.fontFamily};
  font-size: 10px;
`;

export const ReceiptText = styled.Text`
  height: 5%;
  font-family: ${fonts.tahoma.fontFamily};
  font-size: 10px;
`;

export const PaymentDisplay = styled.Text`
  font-family: ${fonts.tahoma.fontFamily};
  font-size: 10px;
`;

export const DateDisplay = styled.Text`
  font-family: ${fonts.tahoma.fontFamily};
  font-size: 10px;
`;

export const PriceContainer = styled.View`
  height: 12%;
  justify-content: flex-end;
`;

export const Price = styled.Text`
  font-family: ${fonts.tahomaBold.fontFamily};
  font-size: 15px;
`;

export const DateContainer = styled.View`
  height: 20%;
  justify-content: center;
`;

export const EmptySpace = styled.View`
  height: 5%;
`;
