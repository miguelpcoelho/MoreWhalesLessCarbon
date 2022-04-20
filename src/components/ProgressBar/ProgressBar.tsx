import { t } from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text } from "react-native";
import { ProgressBarProps } from "../../interfaces";
import * as Styled from "./ProgressBar.styles";

const ProgressBar = ({
  title,
  color,
  progressBarValue,
  total,
  videoDuration,
  personStats,
  deadStats,
  boldText,
}: ProgressBarProps) => {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const [carbonKg, setCarbonKg] = useState(0);

  const increaseSize = () => {
    Animated.timing(progressAnim, {
      toValue: progressBarValue,
      duration: videoDuration,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (videoDuration) {
      const timer = setInterval(() => {
        setCarbonKg((prevValue) => {
          if (prevValue === total) {
            clearInterval(timer);
            return total;
          }
          return prevValue + 1;
        });
      }, videoDuration / total);
    }
  }, []);

  useEffect(() => {
    increaseSize();
  }, []);

  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Styled.Name>{title}</Styled.Name>
        <Styled.BoldName>{boldText}</Styled.BoldName>
      </Styled.NameContainer>
      <Styled.ProgressBarContainer>
        <Styled.ProgressBar
          style={{
            width: personStats ? progressBarValue : progressAnim,
            backgroundColor: color,
          }}
        >
          <Styled.ProgressBarValue>
            {personStats ? 560 : carbonKg} {deadStats ? "metric ton" : "kg"}
          </Styled.ProgressBarValue>
        </Styled.ProgressBar>
      </Styled.ProgressBarContainer>
    </Styled.Container>
  );
};

export default ProgressBar;
