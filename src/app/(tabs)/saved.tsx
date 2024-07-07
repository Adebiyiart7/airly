import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { Text } from "@/src/components/ThemedText";
import { StyleSheet, View } from "react-native";

export default function SavedScreen() {
  return (
    <ParallaxScrollView
      HeaderContent={
        <View>
          <Text>Hello</Text>
        </View>
      }
    >
      <View>
        <Text>Hello</Text>
      </View>
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
