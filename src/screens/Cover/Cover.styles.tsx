import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  padding-top: 80px;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  text-transform: uppercase;
`;

export const OptionContainer = styled(TouchableOpacity)`
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-radius: 100px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const OptionTitle = styled(Text)`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const OptionContent = styled(Text)`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`;
