import ScreenWrapper from "@/src/components/ScreenWrapper";
import { Text } from "@/src/components/ThemedText";
import Sizes from "@/src/constants/Sizes";
import Constants from "expo-constants";
import React from "react";
import { Dimensions, View } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import FlightForm from "./components/FlightForm";
import Header from "./components/Header";

const { height } = Dimensions.get("window");
const HomeScreenComponent = () => {
  return (
    <ScreenWrapper scrollEnabled={false}>
      <View style={{ height }}>
        <View>
          <Header />
        </View>
        <View style={styles.container}>
          <FlightForm />
          <Text>Special Offer</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreenComponent;

const styles = ScaledSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: scale(Constants.statusBarHeight + 76),
    bottom: "20@s",
    paddingHorizontal: scale(Sizes.wall),
  },
});
