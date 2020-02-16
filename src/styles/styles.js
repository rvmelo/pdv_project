import styled from 'styled-components';
import {fonts} from '../theme/fonts/fonts';
import Swiper from 'react-native-swiper';

export const KeyboardContainer = styled.View`
  flex: 4;
  width: 90%;
  padding-top: 5%;
`;

export const KeyboardButtonContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: white;
`;

export const KeyboardFillContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: ${fonts.dinCondensed.fontFamily};
  font-size: 20px;
`;

export const KeyboardRowContainer = styled.View`
  flex: 1;
  flex-direction: row;
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
  dotColor: '#d3d3d3',
  activeDotColor: 'purple',
})``;

export const SwiperComponent = styled.View`
  flex: 1;
  padding-top: 8%;
  justify-content: center;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  width: 30%;
  align-items: center;
`;
export const IconTitle = styled.Text`
  color: black;
  font-family: ${fonts.dinCondensed.fontFamily};
  font-size: 15px;
`;

export const DeleteIcon = styled.Image.attrs({
  source: require('../../assets/Images/delete-icon.png'),
})`
  margin-right: 4%;
  width: 60%;
  height: 60%;
`;

export const OptionsContainer = styled.View`
  flex: 1;
  background-color: red;
`;
