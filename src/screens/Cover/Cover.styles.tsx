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
  padding-top: 80px;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const HeaderTitle = styled(Text)`
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  color: ${colors.main};
  font-family: ${fonts.title};
`;

export const FooterTitle = styled(Text)`
  margin-top: 35px;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  color: ${colors.white};
  font-family: ${fonts.title};
`;

export const Subtitle = styled(Text)`
  font-size: 15px;
  text-align: center;
  color: ${colors.main};
  font-family: ${fonts.text};
`;

export const OptionContainer = styled(TouchableOpacity)`
  border: ${colors.main} 3px solid;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 50px;
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

export const OptionContent = styled(Text)`
  font-size: 20px;
  text-align: center;
`;

export const LanguageSelectorContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  align-self: flex-start;
  margin-left: 20px;
`;

export const FlagContainer = styled(TouchableOpacity)`
  width: 55px;
  height: 35px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Flag = styled(Image)`
  width: 55px;
  height: 35px;
  border-radius: 5px;
`;
