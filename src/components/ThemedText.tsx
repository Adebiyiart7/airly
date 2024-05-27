import { useThemeColor } from "@/src/hooks/useThemeColor";
import { Text as _Text, type TextProps } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { AppFonts } from "../constants/Fonts";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  font?: AppFonts;
  type?: "default" | "link";
  size?: number | `${number}`;
};

export const Text = ({
  style,
  lightColor,
  darkColor,
  size,
  font,
  type = "default",
  ...rest
}: ThemedTextProps) => {
  const SIZE: number = (size as number) || 14;
  const colors = useThemeColor();

  return (
    <_Text
      numberOfLines={1}
      style={[
        type === "default" ? styles.default : undefined,
        type === "link" ? styles.link : undefined,
        { color: colors.text, fontSize: SIZE, fontFamily: font },
        style,
      ]}
      {...rest}
    />
  );
};

const styles = ScaledSheet.create({
  default: {
    lineHeight: "20@s",
    fontFamily: "Regular",
  },

  link: {
    color: "#0a7ea4",
    fontFamily: "Regular",
  },
});
