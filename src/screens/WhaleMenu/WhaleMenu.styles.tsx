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

export const TopContent = styled(View)`
  flex-direction: row;
  width: 100%;
  padding-left: 10%;
  padding-right: 20%;
  margin-top: 5%;
`;

export const SeeInActionContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  flex: 1;
  align-items: flex-end;
`;

export const SeeInActionText = styled(Text)`
  font-size: 15px;
  font-family: ${fonts.text};
  color: ${colors.main};
  margin-bottom: 30%;
`;

export const AsWhaleContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  flex: 1;
  align-items: flex-start;
`;

export const AsWhaleTextContainer = styled(View)`
  margin-top: 30%;
`;

export const AsWhaleText = styled(Text)`
  margin-top: 30%;
  font-size: 15px;
  font-family: ${fonts.text};
  color: ${colors.main};
`;

export const AsWhaleTextName = styled(Text)`
  font-size: 15px;
  font-family: ${fonts.title};
  color: ${colors.main};
`;

export const WhaleContainer = styled(View)`
  background: ${colors.blue};
  align-items: center;
  justify-content: center;
  margin-left: 15%;
`;

export const BodyContainer = styled(View)`
  align-items: center;
  flex: 1;
  justify-content: space-between;
  padding-top: 10%;
  padding-bottom: 20%;
`;

export const WhaleActionContainer = styled(TouchableOpacity)`
  height: 100px;
  border: 2px solid ${colors.main};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const WhaleMenuText = styled(Text)`
  font-size: 22px;
  letter-spacing: -1px;
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.main};
`;
