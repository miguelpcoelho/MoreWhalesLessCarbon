import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import colors from "../../styles/colors";
import * as Styled from "./Header.styles";

const Header = () => {
  const navigation = useNavigation<any>();

  return (
    <Styled.Container>
      <AntDesign
        name="arrowleft"
        size={30}
        color={colors.main}
        onPress={() => navigation.goBack()}
      />
    </Styled.Container>
  );
};

export default Header;
