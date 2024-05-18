import { Text } from "@/components/ThemedText";
import { ImageBackground } from "expo-image";
import React from "react";
import { Dimensions, View, ViewStyle } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import AccountCard from "./AccountCard";
import { useThemeColor } from "@/hooks/useThemeColor";
import Constants from "expo-constants";
import Sizes from "@/constants/Sizes";

const { height } = Dimensions.get("window");

const Header = () => {
  const colors = useThemeColor();
  const containerStyles: ViewStyle = {
    height: height * 0.37,
    backgroundColor: colors.primary,
  };

  return (
    <View style={[containerStyles, styles.container]}>
      <ImageBackground
        cachePolicy={"memory-disk"}
        source={require("@/assets/images/parallax-header-bg.png")}
        style={styles.headerBg}
      >
        <AccountCard />
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  container: {
    overflow: "hidden",
  },
  headerBg: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
    paddingTop: scale(Constants.statusBarHeight + 4),
    paddingHorizontal: scale(Sizes.wall),
  },
});
