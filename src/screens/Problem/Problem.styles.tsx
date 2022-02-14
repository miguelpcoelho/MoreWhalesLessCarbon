import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
`;

export const Background = styled(ImageBackground)`
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const Title = styled(Text)`
  font-family: ${fonts.text};
  color: ${colors.main};
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ContentBlockContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  padding-left: 20px;
  justify-content: space-between;
  padding: 30px;
`;

export const Button = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-right: 30px;
  margin-left: auto;
  background-color: ${colors.pink};
`;

export const ButtonText = styled(Text)`
  font-family: ${fonts.title};
  color: ${colors.main};
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;
