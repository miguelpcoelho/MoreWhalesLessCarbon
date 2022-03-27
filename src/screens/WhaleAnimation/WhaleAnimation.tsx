import { Video } from "expo-av";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { ColorValue, Dimensions } from "react-native";
import globe from "../../../assets/lottie/globe-world-animation.json";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import solutionBackground from "../../../assets/images/solution_background.png";
import * as Styled from "./WhaleAnimation.styles";
import Header from "../../components/Header/Header";
import { useRoute } from "@react-navigation/native";
import TopContent from "../../components/TopContent/TopContent";
import { t } from "i18next";
import { ProgressBarProps, WhaleProps } from "../../interfaces";
import colors from "../../styles/colors";

const windowWidth = Dimensions.get("window").width;

const WhaleAnimation = () => {
  const { width } = Dimensions.get("window");
  const animationRef = useRef<AnimatedLottieView>(null);
  const route = useRoute();

  const [months, setMonths] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMonths((prevMonth) => {
        if (prevMonth === 12) {
          clearInterval(timer);
          return 12;
        }
        return prevMonth + 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    animationRef?.current?.play(0, 140);
  }, []);

  const { name, species, lifeTime, image, video } = route.params as WhaleProps;

  const progressBarStats: ProgressBarProps[] = [
    {
      title: t("whaleAnimation.progressBar1Title", { name }),
      color: colors.blue,
      progressBarValue: windowWidth / 1.87,
      total: 33,
    },
    {
      title: t("whaleAnimation.progressBar2Title"),
      color: colors.green,
      progressBarValue: windowWidth / 56.1,
      total: 1,
    },
    {
      title: t("whaleAnimation.progressBar3Title"),
      color: colors.orange,
      progressBarValue: windowWidth / 9.07,
      total: 7,
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
              <Styled.Months>{months}</Styled.Months>
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
              title={stat.title}
              color={stat.color}
              total={stat.total}
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
