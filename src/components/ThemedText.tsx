import { useThemeColor } from "@/src/hooks/useThemeColor";
import { Text as _Text, type TextProps } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "link";
  size?: number | `${number}`;
};

export const Text = ({
  style,
  lightColor,
  darkColor,
  size,
  type = "default",
  ...rest
}: ThemedTextProps) => {
  const SIZE: number = (size as number) || 14;
  const colors = useThemeColor();

  return (
    <_Text
      style={[
        { color: colors.text, fontSize: SIZE },
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
    lineHeight: "20@s",
    fontFamily: "Regular",
  },

  link: {
    color: "#0a7ea4",
    fontFamily: "Regular",
  },
});
