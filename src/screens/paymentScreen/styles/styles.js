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
