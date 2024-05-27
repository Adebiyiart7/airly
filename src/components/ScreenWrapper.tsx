import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends ScrollViewProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children, ...otherProps }: Props) => {
  const colors = useThemeColor();
  return (
    <ScrollView style={{ backgroundColor: colors.background }} {...otherProps}>
      {children}
    </ScrollView>
  );
};

export default ScreenWrapper;

const styles = ScaledSheet.create({});
