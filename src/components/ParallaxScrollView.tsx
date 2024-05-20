import type { PropsWithChildren, ReactElement } from "react";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { View } from "@/src/components/ThemedView";
import { Colors } from "@/src/constants/Colors";
import Sizes from "@/src/constants/Sizes";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import { ImageBackground } from "expo-image";
import { ScaledSheet } from "react-native-size-matters";

type Props = PropsWithChildren<{
  HeaderImage?: ReactElement;
  headerHeight?: number | string;
  HeaderContent?: ReactElement;
  headerBackgroundColor?: keyof typeof Colors.light & keyof typeof Colors.dark;
}>;

export default ({
  children,
  HeaderImage,
  headerHeight,
  HeaderContent,
  headerBackgroundColor,
}: Props) => {
  const colors = useThemeColor();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const HEADER_HEIGHT = (headerHeight as number) || Sizes.parallaxHeaderHeight;

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            {
              height: HEADER_HEIGHT,
              backgroundColor: headerBackgroundColor || colors.primary,
            },
            headerAnimatedStyle,
          ]}
        >
          {HeaderImage || (
            <ImageBackground
              cachePolicy={"memory-disk"}
              source={require("@/src/assets/images/parallax-header-bg.png")}
              style={styles.parallaxHeaderBg}
            >
              {HeaderContent}
            </ImageBackground>
          )}
        </Animated.View>
        <View style={styles.content}>{children}</View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: "1@s",
  },
  header: {
    overflow: "hidden",
  },
  content: {
    flex: "1@s",
    padding: "32@s",
    gap: "16@s",
    overflow: "hidden",
  },
  parallaxHeaderBg: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
