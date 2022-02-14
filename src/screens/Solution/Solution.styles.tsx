import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 100px;
  align-items: center;
`;

export const Background = styled(ImageBackground)`
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Subtitle = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 80px;
`;

export const SolutionsContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Solution = styled(TouchableOpacity)`
  width: 300px;
  height: 80px;
  border: 1px solid;
  border-radius: 20px;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
`;

export const SolutionText = styled(Text)`
  font-size: 20px;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

export const WhaleText = styled(Text)`
  font-size: 15px;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

export const Whale = styled(TouchableOpacity)`
  width: 80px;
  height: 100px;
  border: 1px solid;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const WhalesContainer = styled(View)`
  flex-direction: row;
  padding-left: 60px;
  padding-right: 60px;
  justify-content: space-between;
  width: 100%;
`;

export const ImageContainer = styled(Image)`
  width: 70px;
  height: 50px;
`;
