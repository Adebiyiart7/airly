import { Text as _Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ScaledSheet } from "react-native-size-matters";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "link";
};

export const Text = ({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) => {
  const colors = useThemeColor();

  return (
    <_Text
      style={[
        { color: colors.text },
        type === "default" ? styles.default : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
};

const styles = ScaledSheet.create({
  default: {
    fontSize: "16@s",
    lineHeight: "24@s",
    fontFamily: "Regular",
  },

  link: {
    lineHeight: "30@s",
    fontSize: "16@s",
    color: "#0a7ea4",
  },
});
