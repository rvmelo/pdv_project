import styled from 'styled-components';
import {fonts} from '../../../theme/fonts/fonts';
import LinearGradient from 'react-native-linear-gradient';

export const PaymentBackground = styled(LinearGradient).attrs({
  colors: ['#771ccb', '#bd62ce'],
})`
  flex: 1;
  align-items: center;
  background-color: purple;
`;

export const PriceDisplay = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.Text`
  color: white;
  font-family: ${fonts.dinCondensed.fontFamily};
  font-size: 50px;
`;

export const Subtitle = styled.Text`
  color: white;
  font-family: ${fonts.dinCondensed.fontFamily};
  font-size: 15px;
`;
