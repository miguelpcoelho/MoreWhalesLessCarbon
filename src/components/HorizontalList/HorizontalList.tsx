import { t } from "i18next";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, FlatList } from "react-native";
import { OceanCycleProps } from "../../interfaces";
import * as Styled from "./HorizontalList.styles";

const { width } = Dimensions.get("window");

const OceanCycleInformation = ({
  title,
  text,
  slideNumber,
}: OceanCycleProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fadeIn();
    }, 45000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Styled.Container
      style={{
        height: width / 1.5,
        width: width,
      }}
    >
      <Styled.Border>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Body>{text}</Styled.Body>
        <Styled.ScrollInfoContainer style={{ opacity: fadeAnim }}>
          {slideNumber === 1 && (
            <Styled.ScrollInfo>
              ({t("whaleAnimation.oceanCycle.scrollInfo")})
            </Styled.ScrollInfo>
          )}
          <Styled.SlideNumber>{slideNumber}/4</Styled.SlideNumber>
        </Styled.ScrollInfoContainer>
      </Styled.Border>
    </Styled.Container>
  );
};

const HorizontalList = (oceanCycle: { oceanCycle: OceanCycleProps[] }) => {
  return (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={oceanCycle.oceanCycle}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <OceanCycleInformation
          title={item.title}
          text={item.text}
          slideNumber={item.slideNumber}
        />
      )}
    />
  );
};

export default HorizontalList;
