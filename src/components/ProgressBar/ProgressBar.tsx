import React, { useEffect, useRef, useState } from "react";
import { Animated, ColorValue, Dimensions, Text } from "react-native";
import * as Styled from "./ProgressBar.styles";

interface ProgressBarProps {
  name: string;
  color: ColorValue;
  progressBarValue: number;
}

const windowWidth = Dimensions.get("window").width;

const ProgressBar = ({ name, color, progressBarValue }: ProgressBarProps) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  const increaseSize = () => {
    Animated.timing(progressAnim, {
      toValue: progressBarValue,
      duration: 15000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    increaseSize();
  }, []);

  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Styled.Name>{name}</Styled.Name>
      </Styled.NameContainer>
      <Styled.ProgressBarContainer style={{ width: windowWidth / 1.85 }}>
        <Styled.ProgressBar
          style={{
            width: progressAnim,
            backgroundColor: color,
          }}
        />
      </Styled.ProgressBarContainer>
    </Styled.Container>
  );
};

export default ProgressBar;
