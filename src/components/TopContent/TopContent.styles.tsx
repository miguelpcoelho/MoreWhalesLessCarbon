import { Text } from "react-native";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Title = styled(Text)`
  font-family: ${fonts.text};
  color: ${colors.main};
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
`;

export const Subtitle = styled(Text)`
  font-family: ${fonts.text};
  color: ${colors.main};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
