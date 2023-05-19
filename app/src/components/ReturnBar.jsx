import React from "react";
import { View, Image } from "react-native";

import { styles } from "../screens/style";

import Icon from "react-native-vector-icons/FontAwesome";

export function ReturnBar() {
  return (
    <View style={styles.returnBar}>
      <Icon 
        name="angle-left" 
        size={30} 
        color="#fff" 
        style={styles.icon}  
      />
      <Image
        style={styles.logo}
        source={require('../../assets/moura/moura.png')}
      >
      </Image>

    </View>
  );
}