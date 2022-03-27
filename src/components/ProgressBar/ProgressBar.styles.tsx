import { Animated, Text, View } from "react-native";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

export const NameContainer = styled(View)`
  width: 100px;
  margin-right: 10px;
`;

export const Name = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  font-family: ${fonts.text};
  color: ${colors.main};
`;

export const ProgressBar = styled(Animated.View)`
  border-radius: 3px;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 2px;
  flex-direction: row;
  overflow: visible;
`;

export const ProgressBarContainer = styled(View)`
  border-radius: 4px;
  padding: 1px;
  height: 18px;
  background-color: ${colors.main};
`;

export const ProgressBarValue = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  font-family: ${fonts.text};
  color: ${colors.white};
`;
