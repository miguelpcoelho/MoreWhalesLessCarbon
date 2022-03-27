import React, { useEffect, useRef, useState } from "react";
import { Animated, Text } from "react-native";
import { ProgressBarProps } from "../../interfaces";
import * as Styled from "./ProgressBar.styles";

const ProgressBar = ({
  title,
  color,
  progressBarValue,
  total,
}: ProgressBarProps) => {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const [carbonTons, setCarbonTons] = useState(0);

  const increaseSize = () => {
    Animated.timing(progressAnim, {
      toValue: progressBarValue,
      duration: 15000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCarbonTons((prevValue) => {
        if (prevValue === total) {
          clearInterval(timer);
          return total;
        }
        return prevValue + 1;
      });
    }, 480);
  }, []);

  useEffect(() => {
    increaseSize();
  }, []);

  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Styled.Name>{title}</Styled.Name>
      </Styled.NameContainer>
      <Styled.ProgressBarContainer style={{ width: "60%" }}>
        <Styled.ProgressBar
          style={{
            width: progressAnim,
            backgroundColor: color,
          }}
        >
          <Styled.ProgressBarValue>
            {carbonTons} tons/year
          </Styled.ProgressBarValue>
        </Styled.ProgressBar>
      </Styled.ProgressBarContainer>
    </Styled.Container>
  );
};

export default ProgressBar;
