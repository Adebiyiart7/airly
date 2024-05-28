import { useThemeColor } from "@/src/hooks/useThemeColor";
import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { Text } from "../ThemedText";

interface Props extends TextInputProps {
  label: string;
  Icon: React.ReactNode;
}

const TextInputField = ({ label, Icon, ...props }: Props) => {
  const colors = useThemeColor();

  return (
    <View style={[styles.wrapper, { borderColor: colors.border }]}>
      <Text
        size={12}
        font="Medium"
        style={[
          styles.label,
          {
            backgroundColor: colors.background2,
          },
        ]}
      >
        {label}
      </Text>
      <View>{Icon}</View>
      <TextInput
        style={[styles.input, { color: colors.text }]}
        placeholderTextColor={colors.mediumText}
        {...props}
      />
    </View>
  );
};

export default TextInputField;

const styles = ScaledSheet.create({
  input: {
    fontFamily: "SemiBold",
    marginLeft: "12@s",
    flex: 1,
    height: "100%",
  },
  label: {
    position: "absolute",
    top: scale(-12),
    left: "12@s",
    paddingHorizontal: "4@s",
  },
  wrapper: {
    height: "52@s",
    borderRadius: "12@s",
    borderWidth: "1@s",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "12@s",
  },
});
