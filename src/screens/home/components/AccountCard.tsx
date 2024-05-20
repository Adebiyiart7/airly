import { Text } from "@/src/components/ThemedText";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const AccountCard = () => {
  return (
    <View>
      <View>
        <Image source={""} />
        <View>
          <Text numberOfLines={1}>{t("Good morning!")} 🌤</Text>
          <Text numberOfLines={1} size={18} style={styles.name}>
            Adeeyo Joseph Adebiyi
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default AccountCard;

const styles = ScaledSheet.create({
  name: {
    fontFamily: "SemiBold",
  },
});
