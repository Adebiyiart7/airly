import { Text } from "@/src/components/ThemedText";
import Sizes from "@/src/constants/Sizes";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import React, { useState } from "react";
import { View } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import Chip from "./Chip";
import { TripCategory } from "../type";
import commonStyles from "@/src/utils/commonStyles";

const tripCategory: TripCategory[] = ["One-Way", "Round Trip", "Multi-City"];

const FlightForm = () => {
  const colors = useThemeColor();
  const [activeCategory, setActiveCategory] = useState(tripCategory[0]);

  const handleCategory = (category: TripCategory) => {
    setActiveCategory(category);
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.background2 }]}>
      <View style={[commonStyles.flexRowFull, styles.category]}>
        {tripCategory.map((category: TripCategory) => (
          <Chip
            key={category}
            label={category}
            active={activeCategory === category}
            onPress={() => handleCategory(category)}
          />
        ))}
      </View>
    </View>
  );
};

export default FlightForm;

const styles = ScaledSheet.create({
  category: {
    gap: "8@s",
  },
  container: {
    borderRadius: "12@s",
    padding: scale(Sizes.wall),
  },
});
