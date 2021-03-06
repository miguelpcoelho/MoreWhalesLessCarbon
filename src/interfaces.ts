import { AVPlaybackSource } from "expo-av/build/AV";
import { ColorValue, ImageSourcePropType } from "react-native";

export interface ContentBlockProps {
  id: number;
  text?: string;
  image?: ImageSourcePropType;
}

export interface WhaleProps {
  name: string;
  image: ImageSourcePropType;
  species: string;
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
