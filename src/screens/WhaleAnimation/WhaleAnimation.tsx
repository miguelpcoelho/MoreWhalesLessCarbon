import { useRoute } from "@react-navigation/native";
import { Video } from "expo-av";
import { t } from "i18next";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import solutionBackground from "../../../assets/images/solution_background.png";
import whale from "../../../assets/images/whale.png";
import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TitleSubtitle from "../../components/TitleSubtitle/TitleSubtitle";
import { ActionProps, ProgressBarProps } from "../../interfaces";
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

  const { name, lifeTime, video, videoDuration, pathTime } =
    route.params as ActionProps;

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
      title: t("whaleAnimation.progressBar1Title", { name: "Dory" }),
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

  return (
    <Styled.Container>
      <Styled.Background source={solutionBackground} resizeMode="stretch">
        <Header />
        <TitleSubtitle title="Dory" subtitle={name} />
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
              <Styled.WhaleImage source={whale} />
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
              videoDuration={stat.videoDuration}
            />
          ))}
        </Styled.ProgressBarContainer>
      </Styled.Background>
    </Styled.Container>
  );
};

export default WhaleAnimation;
