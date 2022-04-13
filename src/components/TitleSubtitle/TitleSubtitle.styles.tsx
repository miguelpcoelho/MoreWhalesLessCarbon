import { Text } from "react-native";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Title = styled(Text)`
  font-family: ${fonts.title};
  color: ${colors.main};
  font-size: 46px;
  letter-spacing: -1px;
  text-align: center;
`;

export const Subtitle = styled(Text)`
  font-family: ${fonts.title};
  color: ${colors.main};
  font-size: 20px;
  text-align: center;
`;
