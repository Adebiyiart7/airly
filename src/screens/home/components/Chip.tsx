import { Pressable } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { TripCategory } from "../type";
import { Text } from "@/src/components/ThemedText";
import { useThemeColor } from "@/src/hooks/useThemeColor";

interface Props {
  active?: boolean;
  label: TripCategory;
  onPress: () => void;
}

const Chip = React.memo(({ active, label, onPress }: Props) => {
  const colors = useThemeColor();
  const wrapperStyles = {
    backgroundColor: active ? colors.primary : colors.background2,
    borderColor: active ? colors.primary : colors.border,
  };

  return (
    <Pressable onPress={onPress} style={[styles.wrapper, wrapperStyles]}>
      <Text
        font="Medium"
        style={{ color: active ? colors.white : colors.text }}
      >
        {label}
      </Text>
    </Pressable>
  );
});

export default Chip;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: "1@s",
    borderRadius: "25@s",
    paddingHorizontal: "10@s",
    height: "36@s",
    justifyContent: "center",
    alignItems: "center",
  },
});
