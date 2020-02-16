import styled from 'styled-components';
import {fonts} from '../../../theme/fonts/fonts';
import Swiper from 'react-native-swiper';

export const PanelContainer = styled.View`
  flex: 1.5;
  margin-left: 5%;
  margin-right: 5%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`;

export const SwiperComponent = styled.View`
  flex: 1;
  padding-top: 8%;
  justify-content: center;
  flex-direction: row;
`;

export const SwiperContainer = styled(Swiper).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: true,
  dotColor: '#d3d3d3',
  activeDotColor: 'purple',
})``;

export const IconContainer = styled.View`
  width: 30%;
  align-items: center;
`;

export const IconTitle = styled.Text`
  color: black;
  font-family: ${fonts.dinCondensed.fontFamily};
  font-size: 15px;
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
