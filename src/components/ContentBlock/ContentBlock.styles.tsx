import { View, Image } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  width: 250px;
  align-self: ${(props) => (props.testID === "2" ? "flex-end" : "flex-start")};
`;

export const ImageContainer = styled(Image)`
  width: 300px;
  height: 100px;
  margin-left: -40px;
  margin-top: 10px;
`;
