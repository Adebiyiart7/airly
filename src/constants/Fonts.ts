const Fonts = {
  Regular: require("../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  Medium: require("../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  SemiBold: require("../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
  Bold: require("../assets/fonts/urbanist/Urbanist-Bold.ttf"),
};

type AppFonts = keyof typeof Fonts;

export { Fonts, AppFonts };
