import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/src/components/Collapsible";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { Text } from "@/src/components/ThemedText";
import { View } from "@/src/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      HeaderImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <View style={styles.titleContainer}>
        <Text type="title">Explore</Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>
      <Collapsible title="File-based routing">
        <Text>
          This app has two screens:{" "}
          <Text type="defaultSemiBold">app/(tabs)/index.tsx</Text> and{" "}
          <Text type="defaultSemiBold">app/(tabs)/explore.tsx</Text>
        </Text>
        <Text>
          The layout file in{" "}
          <Text type="defaultSemiBold">app/(tabs)/_layout.tsx</Text> sets up the
          tab navigator.
        </Text>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Text>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <Text type="defaultSemiBold">w</Text> in the
          terminal running this project.
        </Text>
      </Collapsible>
      <Collapsible title="Images">
        <Text>
          For static images, you can use the{" "}
          <Text type="defaultSemiBold">@2x</Text> and{" "}
          <Text type="defaultSemiBold">@3x</Text> suffixes to provide files for
          different screen densities
        </Text>
        <Image
          source={require("@/src/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
      </Collapsible>
      <Collapsible title="Custom fonts">
        <Text>
          Open <Text type="defaultSemiBold">app/_layout.tsx</Text> to see how to
          load{" "}
          <Text style={{ fontFamily: "SpaceMono" }}>
            custom fonts such as this one.
          </Text>
        </Text>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Text>
          This template has light and dark mode support. The{" "}
          <Text type="defaultSemiBold">useColorScheme()</Text> hook lets you
          inspect what the user's current color scheme is, and so you can adjust
          UI colors accordingly.
        </Text>
      </Collapsible>
      <Collapsible title="Animations">
        <Text>
          This template includes an example of an animated component. The{" "}
          <Text type="defaultSemiBold">components/HelloWave.tsx</Text> component
          uses the powerful{" "}
          <Text type="defaultSemiBold">react-native-reanimated</Text> library to
          create a waving hand animation.
        </Text>
        {Platform.select({
          ios: (
            <Text>
              The{" "}
              <Text type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </Text>{" "}
              component provides a parallax effect for the header image.
            </Text>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
