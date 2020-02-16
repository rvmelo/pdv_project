import styled from 'styled-components';
import {fonts} from '../../../theme/fonts/fonts';

export const KeyboardContainer = styled.View`
  flex: 4;
  width: 90%;
  padding-top: 5%;
`;

export const KeyboardRowContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const KeyboardFillContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 60px;
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

export const ButtonText = styled.Text`
  color: white;
  font-family: ${fonts.dinCondensed.fontFamily};
  font-size: 20px;
`;

export const DeleteIcon = styled.Image.attrs({
  source: require('../../../../assets/Images/delete-icon.png'),
})`
  margin-right: 4%;
  width: 60%;
  height: 60%;
`;
