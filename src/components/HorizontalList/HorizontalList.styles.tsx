import { Animated, Text, View } from "react-native";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(View)`
  margin-top: 40px;
  padding-left: 35px;
  padding-right: 35px;
`;

export const Border = styled(View)`
  border: 1px solid ${colors.main};
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const ScrollInfoContainer = styled(Animated.View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled(Text)`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-family: ${fonts.title};
  color: ${colors.main};
`;

export const Body = styled(Text)`
  margin-bottom: 15px;
  text-align: justify;
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.main};
`;

export const ScrollInfo = styled(Text)`
  margin-right: 10px;
  font-size: 11px;
  font-family: ${fonts.text};
  color: ${colors.main};
`;

export const SlideNumber = styled(Text)`
  text-align: right;
  font-size: 13px;
  font-family: ${fonts.text};
  color: ${colors.main};
`;
