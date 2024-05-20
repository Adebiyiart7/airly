import { View as _View, type ViewProps } from "react-native";

import { useThemeColor } from "@/src/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export const View = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) => {
  const colors = useThemeColor();

  return (
    <_View
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
};
