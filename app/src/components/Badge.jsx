import React from "react";
import { View, Text } from "react-native";

import { styles } from "../screens/style";

export function Badge(props) {
  const { text }= props; 

  return(
    <View style={styles.badge}>
      <Text style={styles.textBadge}>
        {text}
      </Text>

    </View>
  ); 
}