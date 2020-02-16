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

export const HeaderContainer = styled.View`
  padding-top: 5%;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  /* background-color: purple; */
  flex: 1;
`;
export const HeaderText = styled.Text`
  color: white;
  font-family: ${fonts.dinCondensed.fontFamily};
  font-size: 20px;
  /* background-color: red; */
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
  padding-top: 1%;
  justify-content: flex-start;
  width: 20%;
  margin-right: 0%;
`;

export const BackImage = styled.Image.attrs({
  source: require('../../../../assets/Images/left-arrow.png'),
})`
  width: 22%;
  height: 22%;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #00ff7f;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  height: 35%;
  width: 55%;
`;
export const ButtonContainer = styled.View`
  flex: 1.5;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.dinCondensed.fontFamily};
  color: white;
  font-size: 20px;
`;
