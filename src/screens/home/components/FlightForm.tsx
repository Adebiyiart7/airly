import TextInputField from "@/src/components/form/TextInputField";
import Sizes from "@/src/constants/Sizes";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import commonStyles from "@/src/utils/commonStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { TripCategory } from "../type";
import Chip from "./Chip";
import Button from "@/src/components/Button";

const tripCategory: TripCategory[] = ["One-Way", "Round Trip", "Multi-City"];
interface IconProps {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const Icon = React.memo(({ name }: IconProps) => {
  const colors = useThemeColor();
  return (
    <MaterialCommunityIcons color={colors.text} name={name} size={scale(20)} />
  );
});

const FlightForm = () => {
  const colors = useThemeColor();
  const [activeCategory, setActiveCategory] = useState(tripCategory[0]);

  const handleCategory = (category: TripCategory) => {
    setActiveCategory(category);
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.background2 }]}>
      <View style={[commonStyles.flexRowFull, styles.category]}>
        {/* FLIGHT CATEGORY */}
        {tripCategory.map((category: TripCategory) => (
          <Chip
            key={category}
            label={category}
            active={activeCategory === category}
            onPress={() => handleCategory(category)}
          />
        ))}
      </View>

      {/* ORIGIN */}
      <TextInputField
        label="From"
        placeholder="Origin"
        Icon={<Icon name="airplane-takeoff" />}
      />

      {/* DESTINATION */}
      <TextInputField
        label="To"
        placeholder="Destination"
        Icon={<Icon name="airplane-landing" />}
      />

      {/* DEPARTURE DATE */}
      <TextInputField
        label="Departure Date"
        placeholder="Departure Date"
        Icon={<Icon name="calendar-month" />}
      />

      <View style={[commonStyles.flexRow, { gap: scale(16) }]}>
        {/* PASSENGERS */}
        <View style={{ flex: 1 }}>
          <TextInputField
            label="Passengers"
            placeholder="Seats"
            Icon={<Icon name="account-multiple-outline" />}
          />
        </View>

        {/* CLASS */}
        <View style={{ flex: 1 }}>
          <TextInputField
            label="Class"
            placeholder="Class"
            Icon={<Icon name="car-seat" />}
          />
        </View>
      </View>
      <Button label="Search Flights" />
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
    gap: "20@s",
    padding: scale(Sizes.wall),
  },
});
