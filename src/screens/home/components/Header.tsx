import { Text } from "@/src/components/ThemedText";
import { ImageBackground } from "expo-image";
import React from "react";
import { Dimensions, View, ViewStyle } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import AccountCard from "./AccountCard";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import Constants from "expo-constants";
import Sizes from "@/src/constants/Sizes";

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
        source={require("@/src/assets/images/parallax-header-bg.png")}
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
    paddingTop: scale(Constants.statusBarHeight + 8),
    paddingHorizontal: scale(Sizes.wall),
  },
});
