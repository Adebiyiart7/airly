import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/src/components/HelloWave";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { Text } from "@/src/components/ThemedText";
import { View } from "@/src/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      HeaderImage={
        <Image
          source={require("@/src/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.titleContainer}>
        <Text type="title">Welcome!</Text>
        <HelloWave />
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Step 1: Try it</Text>
        <Text>
          Edit <Text type="defaultSemiBold">app/(tabs)/index.tsx</Text> to see
          changes. Press{" "}
          <Text type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </Text>{" "}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run{" "}
          <Text type="defaultSemiBold">npm run reset-project</Text> to get a
          fresh <Text type="defaultSemiBold">app</Text> directory. This will
          move the current <Text type="defaultSemiBold">app</Text> to{" "}
          <Text type="defaultSemiBold">app-example</Text>.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
