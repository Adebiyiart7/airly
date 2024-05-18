import Sizes from "@/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Header from "./components/Header";

const HomeScreenComponent = () => {
  return (
    <View>
      <Header />
    </View>
  );
};

export default HomeScreenComponent;

const styles = ScaledSheet.create({});
