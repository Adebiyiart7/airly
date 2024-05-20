import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "intl-pluralrules";
import { useEffect } from "react";
import "react-native-reanimated";
import "../locales/i18n";

import { useColorScheme } from "@/src/hooks/useColorScheme";
import i18n from "../locales/i18n";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// put translator wrapper function in global scope
(globalThis || this).t = i18n.t;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Regular: require("../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    Medium: require("../assets/fonts/urbanist/Urbanist-Medium.ttf"),
    SemiBold: require("../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    Bold: require("../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
