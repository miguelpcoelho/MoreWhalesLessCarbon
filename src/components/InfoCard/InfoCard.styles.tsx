import { Image, Text, View } from "react-native";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  flex: 2;
`;

export const TextContainer = styled(View)`
  background-color: ${colors.white};
  border: 1px solid ${colors.main};
  border-radius: 5px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 45px;
  margin-right: 10%;
  justify-content: center;
`;

export const InfoText = styled(Text)`
  font-family: ${fonts.text};
  color: ${colors.main};
  font-size: 14px;
`;

export const DeepImage = styled(Image)`
  position: absolute;
  left: 10%;
  top: 40%;
  z-index: 1;
`;
