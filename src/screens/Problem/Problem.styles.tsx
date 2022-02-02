import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  padding-top: 60px;
  align-items: center;
`;

export const Title = styled(Text)`
  text-decoration: underline;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  text-transform: uppercase;
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
  width: 80px;
  height: 80px;
  border: 1px solid;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-right: 30px;
  margin-left: auto;
`;

export const ButtonText = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;
