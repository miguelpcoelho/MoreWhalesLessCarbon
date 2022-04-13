import { AVPlaybackSource } from "expo-av/build/AV";
import { ColorValue, ImageSourcePropType } from "react-native";

export interface ContentBlockProps {
  id: number;
  text?: string;
  image?: ImageSourcePropType;
}

export interface ActionProps {
  name: string;
  lifeTime: number;
  video: AVPlaybackSource;
  videoDuration: number;
  pathTime: number;
}

export interface ProgressBarProps {
  title: string;
  color: ColorValue;
  progressBarValue: number;
  total: number;
  videoDuration: number;
}

export interface OceanCycleProps {
  slideNumber: number;
  title: string;
  text: string;
}
