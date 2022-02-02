import { Video } from "expo-av";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import globe from "../../../assets/lottie/globe-world-animation.json";
import animation from "../../../assets/video/animation_Slomo.mp4";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import * as Styled from "./WhaleAnimation.styles";

const stats: string[] = ["CO2 extracted by baltazar", "tree"];

const WhaleAnimation = () => {
  const { width } = Dimensions.get("window");
  const animationRef = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    animationRef?.current?.play(0, 140);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Styled.Container>
        <Styled.TitleContainer>
          <Styled.Title>Baltazar the whale</Styled.Title>
        </Styled.TitleContainer>

        <Styled.AnimationContainer>
          <Video
            source={animation}
            resizeMode="stretch"
            isLooping
            useNativeControls
            style={{
              width: width,
              height: 250,
            }}
          />
          <Styled.GlobeContainer>
            <AnimatedLottieView
              ref={animationRef}
              source={globe}
              autoPlay={false}
              loop={false}
              style={{ width: 100, height: 100 }}
            />
          </Styled.GlobeContainer>
        </Styled.AnimationContainer>
        <Styled.StatsContainer>
          {stats.map((stat) => (
            <ProgressBar name={stat} key={stat} />
          ))}
        </Styled.StatsContainer>
      </Styled.Container>
    </SafeAreaView>
  );
};

export default WhaleAnimation;
