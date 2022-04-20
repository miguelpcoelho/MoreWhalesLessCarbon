import { useRoute } from "@react-navigation/native";
import { Video } from "expo-av";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import solutionBackground from "../../../assets/images/solution_background.png";
import whale from "../../../assets/images/whale.png";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TitleSubtitle from "../../components/TitleSubtitle/TitleSubtitle";
import { ActionProps } from "../../interfaces";
import * as Styled from "./WhaleAnimation.styles";

const width = Dimensions.get("window").width;

const WhaleAnimation = () => {
  const route = useRoute();

  const [months, setMonths] = useState(0);

  const {
    name,
    progressBarStats,
    video,
    videoDuration,
    pathTime,
    infoCardText,
  } = route.params as ActionProps;

  useEffect(() => {
    if (pathTime && videoDuration) {
      const timer = setInterval(() => {
        setMonths((prevMonth) => {
          if (prevMonth === pathTime) {
            clearInterval(timer);
            return pathTime;
          }
          return prevMonth + 1;
        });
      }, videoDuration / (pathTime + 1));
    }
  }, []);

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
            {pathTime && (
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
            )}
          </Styled.GlobeContainer>
        </Styled.AnimationContainer>
        {progressBarStats && (
          <Styled.ProgressBarContainer>
            {progressBarStats.map((stat) => (
              <ProgressBar
                title={stat.title}
                color={stat.color}
                total={stat.total}
                key={stat.title}
                progressBarValue={stat.progressBarValue}
                videoDuration={videoDuration}
                personStats={stat.personStats}
                deadStats={stat.deadStats}
                boldText={stat.boldText}
              />
            ))}
          </Styled.ProgressBarContainer>
        )}
        {infoCardText && <InfoCard text={infoCardText} />}
      </Styled.Background>
    </Styled.Container>
  );
};

export default WhaleAnimation;
