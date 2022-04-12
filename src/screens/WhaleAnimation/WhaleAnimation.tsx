import { useRoute } from "@react-navigation/native";
import { Video } from "expo-av";
import { t } from "i18next";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView } from "react-native";
import solutionBackground from "../../../assets/images/solution_background.png";
import globe from "../../../assets/lottie/globe-world-animation.json";
import Header from "../../components/Header/Header";
import HorizontalList from "../../components/HorizontalList/HorizontalList";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TopContent from "../../components/TopContent/TopContent";
import {
  OceanCycleProps,
  ProgressBarProps,
  WhaleProps,
} from "../../interfaces";
import colors from "../../styles/colors";
import * as Styled from "./WhaleAnimation.styles";

const windowWidth = Dimensions.get("window").width;

const WhaleAnimation = () => {
  const { width } = Dimensions.get("window");
  const animationRef = useRef<AnimatedLottieView>(null);
  const route = useRoute();

  const [months, setMonths] = useState(0);

  useEffect(() => {
    animationRef?.current?.play(0, 140);
  }, []);

  const { name, species, lifeTime, image, video, videoDuration, pathTime } =
    route.params as WhaleProps;

  useEffect(() => {
    const timer = setInterval(() => {
      setMonths((prevMonth) => {
        if (prevMonth === pathTime) {
          clearInterval(timer);
          return pathTime;
        }
        return prevMonth + 1;
      });
    }, videoDuration / (pathTime + 1));
  }, []);

  const progressBarStats: ProgressBarProps[] = [
    {
      title: t("whaleAnimation.progressBar1Title", { name }),
      color: colors.blue,
      progressBarValue: windowWidth / 1.26,
      total: 33,
      videoDuration,
    },
    {
      title: t("whaleAnimation.progressBar2Title"),
      color: colors.green,
      progressBarValue: windowWidth / 1.89,
      total: 22,
      videoDuration,
    },
    {
      title: t("whaleAnimation.progressBar3Title"),
      color: colors.orange,
      progressBarValue: windowWidth / 6.11,
      total: 7,
      videoDuration,
    },
  ];

  const oceanCycle: OceanCycleProps[] = [
    {
      title: t("whaleAnimation.oceanCycle.title.1"),
      text: t("whaleAnimation.oceanCycle.text.1"),
      slideNumber: 1,
    },
    {
      title: t("whaleAnimation.oceanCycle.title.2"),
      text: t("whaleAnimation.oceanCycle.text.2"),
      slideNumber: 2,
    },
    {
      title: t("whaleAnimation.oceanCycle.title.3"),
      text: t("whaleAnimation.oceanCycle.text.3"),
      slideNumber: 3,
    },
    {
      title: t("whaleAnimation.oceanCycle.title.4"),
      text: t("whaleAnimation.oceanCycle.text.4"),
      slideNumber: 4,
    },
  ];

  const lifeStats: string[] = [
    t("whaleAnimation.chartText.1"),
    t("whaleAnimation.chartText.2"),
    t("whaleAnimation.chartText.3"),
  ];

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
              <Styled.Months>{months}</Styled.Months>
              {months !== 1 ? (
                <Styled.MonthsText>
                  {t("whaleAnimation.months")}
                </Styled.MonthsText>
              ) : (
                <Styled.MonthsText>
                  {t("whaleAnimation.month")}
                </Styled.MonthsText>
              )}
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
        {name === "Brigite" ? (
          <Styled.ProgressBarContainer>
            {progressBarStats.map((stat) => (
              <ProgressBar
                title={stat.title}
                color={stat.color}
                total={stat.total}
                key={stat.title}
                progressBarValue={stat.progressBarValue}
                videoDuration={stat.videoDuration}
              />
            ))}
          </Styled.ProgressBarContainer>
        ) : name === "Dory" ? (
          <HorizontalList oceanCycle={oceanCycle} />
        ) : (
          <Styled.LifeStatsContainer>
            <Styled.ChartsTitle>
              {t("whaleAnimation.chartsTitle", { lifeTime, name })}
            </Styled.ChartsTitle>
            <Styled.LifeChartContainer
              horizontal
              showsHorizontalScrollIndicator
            >
              {lifeStats.map((stat) => (
                <Styled.LifeChart key={stat}>
                  <Styled.LifeChartText>{stat}</Styled.LifeChartText>
                </Styled.LifeChart>
              ))}
            </Styled.LifeChartContainer>
          </Styled.LifeStatsContainer>
        )}
        <Styled.ToHelpButtonContainer>
          <Styled.ToHelpButton activeOpacity={0.7}>
            <Styled.ToHelpButtonText>
              {t("solution.lastCard")}
            </Styled.ToHelpButtonText>
          </Styled.ToHelpButton>
        </Styled.ToHelpButtonContainer>
      </Styled.Background>
    </Styled.Container>
  );
};

export default WhaleAnimation;
