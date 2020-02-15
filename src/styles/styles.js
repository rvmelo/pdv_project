import styled from 'styled-components';
import {fonts} from '../theme/fonts/fonts';
import Swiper from 'react-native-swiper';

export const KeyboardContainer = styled.View`
  flex: 3;
`;

export const KeyboardButtonContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: white;
  /* background-color: red; */
`;

export const KeyboardFillContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-color: blue;
  background-color: blue;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: ${fonts.dinCondensed.fontFamily};
`;

export const KeyboardRowContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: blue;
  justify-content: space-around;
`;

export const PanelContainer = styled.View`
  flex: 1.5;
  margin-left: 5%;
  margin-right: 5%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`;

export const SwiperContainer = styled(Swiper).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: true,
  dotColor: 'grey',
  activeDotColor: 'purple',
})``;

export const SwiperComponent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const OptionsContainer = styled.View`
  flex: 1;
  background-color: red;
`;
