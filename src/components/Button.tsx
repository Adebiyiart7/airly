import { Pressable, PressableProps } from "react-native";
import React from "react";
import { Text } from "./ThemedText";
import { ScaledSheet } from "react-native-size-matters";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends PressableProps {
  label: string;
}

const Button = ({ label }: Props) => {
  const colors = useThemeColor();

  return (
    <Pressable style={[styles.wrapper, { backgroundColor: colors.primary }]}>
      <Text font="SemiBold" style={{ color: colors.white }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = ScaledSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "52@s",
    width: "100%",
    borderRadius: "12@s",
  },
});
