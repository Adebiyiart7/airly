import avatar from "@/src/assets/images/avatar.jpg";
import { Text } from "@/src/components/ThemedText";
import commonStyles from "@/src/utils/commonStyles";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Notification from "@/src/assets/icons/notification.svg";
const { width } = Dimensions.get("window");

const AccountCard = () => {
  return (
    <View style={commonStyles.flexRowFull}>
      <View style={[commonStyles.flexRow, styles.left]}>
        <Image source={avatar} style={styles.avatar} />
        <View style={{ gap: 2 }}>
          <Text numberOfLines={1}>{t("Good morning!")} 🌤</Text>
          <Text numberOfLines={1} size={18} style={styles.name}>
            Adeeyo Joseph Adebiyi
          </Text>
        </View>
      </View>
      <View>
        <Notification />
      </View>
    </View>
  );
};

export default AccountCard;

const styles = ScaledSheet.create({
  avatar: {
    height: "50@s",
    width: "50@s",
    borderRadius: "25@s",
  },
  left: {
    gap: "14@s",
  },
  name: {
    width: width - 160,
    fontFamily: "SemiBold",
  },
});
