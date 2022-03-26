import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Background = styled(ImageBackground)`
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const BodyContainer = styled(View)`
  align-items: center;
  flex: 1;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 150px;
`;

export const SolutionsContainer = styled(View)``;

export const Solution = styled(TouchableOpacity)`
  height: 100px;
  border: 2px solid ${colors.main};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const SolutionText = styled(Text)`
  font-size: 20px;
  letter-spacing: -1px;
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.main};
`;

export const CicleText = styled(Text)`
  margin-bottom: 10px;
  font-size: 20px;
  letter-spacing: -1px;
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.main};
`;

export const WhaleText = styled(Text)`
  font-size: 15px;
  letter-spacing: -1px;
  font-family: ${fonts.text};
  color: ${colors.main};
`;

export const Whale = styled(TouchableOpacity)`
  width: 80px;
  height: 100px;
  border: 2px solid ${colors.main};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const WhalesContainer = styled(View)`
  flex-direction: row;
  padding-left: 70px;
  padding-right: 70px;
  justify-content: space-between;
  width: 100%;
`;

export const ImageContainer = styled(Image)`
  width: 70px;
  height: 50px;
`;
