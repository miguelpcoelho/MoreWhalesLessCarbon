import { Video } from "expo-av";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ColorValue,
  Dimensions,
  SafeAreaView,
  View,
} from "react-native";
import globe from "../../../assets/lottie/globe-world-animation.json";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import solutionBackground from "../../../assets/images/solution_background.png";
import * as Styled from "./WhaleAnimation.styles";
import Header from "../../components/Header/Header";
import { useRoute } from "@react-navigation/native";
import TopContent from "../../components/TopContent/TopContent";
import { t } from "i18next";
import { WhaleProps } from "../../interfaces";
import colors from "../../styles/colors";

interface ProgressBarStatsProps {
  title: string;
  color: ColorValue;
  progressBarValue: number;
}

const windowWidth = Dimensions.get("window").width;

const WhaleAnimation = () => {
  const { width } = Dimensions.get("window");
  const animationRef = useRef<AnimatedLottieView>(null);
  const route = useRoute();

  const monthAnim = useRef(new Animated.Value(0)).current;

  const increaseMonths = () => {
    Animated.timing(monthAnim, {
      toValue: 10,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    increaseMonths();
  }, []);

  useEffect(() => {
    animationRef?.current?.play(0, 140);
  }, []);

  const { name, species, lifeTime, image, video } = route.params as WhaleProps;

  const progressBarStats: ProgressBarStatsProps[] = [
    {
      title: t("whaleAnimation.progressBar1Title", { name }),
      color: colors.blue,
      progressBarValue: windowWidth / 1.87,
    },
    {
      title: t("whaleAnimation.progressBar2Title"),
      color: colors.green,
      progressBarValue: windowWidth / 2.5,
    },
    {
      title: t("whaleAnimation.progressBar3Title"),
      color: colors.orange,
      progressBarValue: windowWidth / 2.2,
    },
  ];

  const lifeStats: string[] = ["1", "2", "3", "4"];

  return (
    <Styled.Container>
      <Styled.Background source={solutionBackground} resizeMode="stretch">
        <Header />
        <TopContent title={name} subtitle={species} />
        <Styled.AnimationContainer>
          <Video
            shouldPlay
            source={video}
            resizeMode="stretch"
            useNativeControls
            style={{
              width: width - 40,
              height: 230,
            }}
          />
          <Styled.GlobeContainer>
            <Styled.ImageContainer>
              <Styled.WhaleImage source={image} />
            </Styled.ImageContainer>
            <Styled.MonthsContainer>
              <Styled.Months>{monthAnim}</Styled.Months>
              <Styled.MonthsText>
                {t("whaleAnimation.months")}
              </Styled.MonthsText>
            </Styled.MonthsContainer>
            <AnimatedLottieView
              ref={animationRef}
              source={globe}
              autoPlay={false}
              loop={false}
              style={{ width: 100, height: 100 }}
            />
          </Styled.GlobeContainer>
        </Styled.AnimationContainer>
        <Styled.ProgressBarContainer>
          {progressBarStats.map((stat) => (
            <ProgressBar
              name={stat.title}
              color={stat.color}
              key={stat.title}
              progressBarValue={stat.progressBarValue}
            />
          ))}
        </Styled.ProgressBarContainer>
        <Styled.LifeStatsContainer>
          <Styled.ChartsTitle>
            {t("whaleAnimation.chartsTitle", { lifeTime, name })}
          </Styled.ChartsTitle>
          <Styled.LifeChartContainer>
            {lifeStats.map((stat) => (
              <Styled.LifeChart key={stat} />
            ))}
          </Styled.LifeChartContainer>
        </Styled.LifeStatsContainer>
        <Styled.ToHelpButton activeOpacity={0.7}>
          <Styled.ToHelpButtonText>
            {t("solution.lastCard")}
          </Styled.ToHelpButtonText>
        </Styled.ToHelpButton>
      </Styled.Background>
    </Styled.Container>
  );
};

export default WhaleAnimation;
