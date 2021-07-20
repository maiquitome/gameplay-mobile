import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function GuildIcon() {
  const uri = 'https://i.pinimg.com/originals/0e/f3/d1/0ef3d1c3ddb4991db19c9ee4ac57ca1d.jpg'

  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
      />
    </LinearGradient>
  )
}
