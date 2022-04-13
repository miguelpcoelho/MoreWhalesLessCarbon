import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import styled from "styled-components";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${colors.main};
`;

export const Background = styled(ImageBackground)`
  padding-top: 20%;
  padding-left: 3%;
  padding-right: 3%;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: 50px;
  letter-spacing: -1px;
  text-align: center;
  color: ${colors.main};
  font-family: ${fonts.title};
`;

export const WhaleContainer = styled(View)`
  align-items: flex-end;
  width: 100%;
  margin-right: -10%;
`;

export const OptionContainer = styled(TouchableOpacity)`
  border: ${colors.main} 3px solid;
  margin-top: 50px;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const OptionTitle = styled(Text)`
  font-size: 30px;
  text-align: center;
  color: ${colors.main};
  font-family: ${fonts.text};
`;

export const LanguageSelectorContainer = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  align-self: flex-start;
  padding-bottom: 25%;
  flex: 1;
`;

export const FlagContainer = styled(TouchableOpacity)`
  width: 10%;
  height: 7%;
  margin-left: 5%;
  margin-right: 8%;
`;

export const Flag = styled(Image)`
  width: 55px;
  height: 35px;
  border-radius: 5px;
`;
