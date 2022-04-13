import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, ImageSourcePropType, View, Image } from "react-native";
import coverBackground from "../../../assets/images/cover_background.png";
import englishFlag from "../../../assets/images/english_flag.png";
import portugueseFlag from "../../../assets/images/portuguese_flag.png";
import whale from "../../../assets/images/whale.png";
import * as Styled from "./Cover.styles";

interface Language {
  id: string;
  nativeName: string;
  image: ImageSourcePropType;
}

const lngs: Language[] = [
  { id: "en", nativeName: "English", image: englishFlag },
  { id: "pt", nativeName: "Português", image: portugueseFlag },
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Cover = () => {
  const navigation = useNavigation<any>();
  const { i18n } = useTranslation();

  return (
    <Styled.Container>
      <Styled.Background source={coverBackground} resizeMode="stretch">
        <Styled.Title>{t("cover.title")}</Styled.Title>

        <Styled.WhaleContainer>
          <Image
            source={whale}
            style={{
              width: width * 0.6,
              height: width * 0.3,
            }}
          />
        </Styled.WhaleContainer>

        <View>
          <Styled.OptionContainer
            style={{
              borderRadius: Math.round(width + height) / 2,
              width: width * 0.5,
              height: width * 0.5,
            }}
            onPress={() => navigation.navigate("WhaleMenu")}
            activeOpacity={0.7}
          >
            <Styled.OptionTitle>{t("cover.button")}</Styled.OptionTitle>
          </Styled.OptionContainer>
        </View>

        <Styled.LanguageSelectorContainer>
          {lngs.map((lng) => (
            <Styled.FlagContainer
              key={lng.id}
              onPress={() => {
                i18n.changeLanguage(lng.id);
              }}
            >
              <Styled.Flag
                source={lng.image}
                style={{
                  width: width * 0.15,
                  height: width * 0.1,
                }}
              />
            </Styled.FlagContainer>
          ))}
        </Styled.LanguageSelectorContainer>
      </Styled.Background>
    </Styled.Container>
  );
};

export default Cover;
