import { AVPlaybackSource } from "expo-av/build/AV";
import { ColorValue, ImageSourcePropType } from "react-native";

export interface ContentBlockProps {
  id: number;
  text?: string;
  image?: ImageSourcePropType;
}

export interface ActionProps {
  name: string;
  video: AVPlaybackSource;
  videoDuration?: number;
  pathTime?: number;
  progressBarStats?: ProgressBarProps[];
  infoCardText?: string;
}

export interface ProgressBarProps {
  title: string;
  color: ColorValue;
  progressBarValue: number;
  total: number;
  videoDuration?: number;
  personStats?: boolean;
  deadStats?: boolean;
  boldText?: string;
}

export interface OceanCycleProps {
  slideNumber: number;
  title: string;
  text: string;
}
