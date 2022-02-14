import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { ImageSourcePropType, TouchableOpacity, View } from "react-native";
import coverBackground from "../../../assets/images/cover_background.png";
import englishFlag from "../../../assets/images/english_flag.png";
import portugueseFlag from "../../../assets/images/portuguese_flag.png";
import * as Styled from "./Cover.styles";

interface OptionProps {
  id: number;
  title: string;
  navigateTo: string;
}

interface Language {
  id: string;
  nativeName: string;
  image: ImageSourcePropType;
}

const lngs: Language[] = [
  { id: "en", nativeName: "English", image: englishFlag },
  { id: "pt", nativeName: "Português", image: portugueseFlag },
];

const Cover = () => {
  const navigation = useNavigation<any>();
  const { i18n } = useTranslation();

  const options: OptionProps[] = [
    {
      id: 1,
      title: t("cover.firstButton"),
      navigateTo: "Problem",
    },
    {
      id: 2,
      title: t("cover.secondButton"),
      navigateTo: "Solution",
    },
  ];

  return (
    <Styled.Container>
      <Styled.Background source={coverBackground} resizeMode="stretch">
        <Styled.HeaderTitle>{t("cover.headerTitle")}</Styled.HeaderTitle>
        <Styled.Subtitle>{t("cover.subtitle")}</Styled.Subtitle>
        <View>
          {options.map((option) => (
            <Styled.OptionContainer
              key={option.id}
              onPress={() => navigation.navigate(option.navigateTo)}
              activeOpacity={0.7}
            >
              <Styled.OptionTitle>{option.title}</Styled.OptionTitle>
            </Styled.OptionContainer>
          ))}
        </View>
        <Styled.FooterTitle>{t("cover.footerTitle")}</Styled.FooterTitle>

        <Styled.LanguageSelectorContainer>
          {lngs.map((lng) => (
            <Styled.FlagContainer
              key={lng.id}
              onPress={() => {
                i18n.changeLanguage(lng.id);
              }}
            >
              <Styled.Flag source={lng.image} />
            </Styled.FlagContainer>
          ))}
        </Styled.LanguageSelectorContainer>
      </Styled.Background>
    </Styled.Container>
  );
};

export default Cover;
