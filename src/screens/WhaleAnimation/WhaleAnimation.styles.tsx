import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  ScrollView,
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
  padding-bottom: 20%;
`;

export const AnimationContainer = styled(View)`
  position: relative;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-left: 20px;
`;

export const GlobeContainer = styled(View)`
  position: absolute;
  bottom: -50px;
  left: 15px;
`;

export const ProgressBarContainer = styled(View)`
  width: 100%;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

export const MonthsContainer = styled(View)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.pink};
  position: absolute;
  bottom: 25px;
  left: 310px;
  padding-bottom: 5px;
`;

export const Months = styled(Animated.Text)`
  font-family: ${fonts.title};
  color: ${colors.main};
  font-size: 20px;
  text-align: center;
`;

export const MonthsText = styled(Text)`
  font-family: ${fonts.text};
  color: ${colors.main};
  font-size: 13px;
  text-align: center;
  margin-top: -10px;
`;

export const OceanCycleContainer = styled(View)`
  width: 100%;
  height: 200px;
  border: 1px solid red;
`;

export const LifeChartContainer = styled(ScrollView)`
  margin-top: 10px;
`;

export const LifeStatsContainer = styled(View)`
  margin-top: 30px;
  width: 100%;
  align-items: center;
`;

export const ChartsTitle = styled(Text)`
  font-family: ${fonts.text};
  color: ${colors.main};
  font-size: 13px;
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 10px;
`;

export const LifeChart = styled(View)`
  border: 2px solid ${colors.main};
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: ${colors.white};
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled(View)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  position: absolute;
  bottom: 270px;
  left: 285px;
`;

export const WhaleImage = styled(Image)`
  width: 70px;
  height: 30px;
`;
