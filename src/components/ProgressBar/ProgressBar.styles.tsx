import { Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  margin-top: 30px;
`;

export const NameContainer = styled(View)`
  width: 120px;
  margin-right: 10px;
`;

export const Name = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProgressBar = styled(View)`
  border: 1px solid;
  border-radius: 5px;
  background-color: blue;
  width: 200px;
  height: 20px;
`;
