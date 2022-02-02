import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  padding-top: 60px;
  align-items: center;
`;

export const TitleContainer = styled(View)`
  width: 200px;
`;

export const Title = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const AnimationContainer = styled(View)`
  position: relative;
  width: 100%;
  justify-content: center;
  margin-bottom: 50px;
`;

export const GlobeContainer = styled(View)`
  position: absolute;
  bottom: -50px;
  left: 32px;
`;

export const StatsContainer = styled(View)`
  flex: 1;
  width: 100%;
  padding-left: 20px;
  align-items: flex-end;
`;
