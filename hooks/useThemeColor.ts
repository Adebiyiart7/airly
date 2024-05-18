/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import { Colors } from "@/constants/Colors";

export const useThemeColor = (): typeof Colors.light & typeof Colors.dark => {
  const theme = useColorScheme() ?? "light";

  return Colors[theme];
};
