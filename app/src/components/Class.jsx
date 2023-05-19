import React from "react";
import { View, Text } from "react-native";
import { styles } from "../screens/style";

import Icon from "react-native-vector-icons/FontAwesome";

export function Class() {
  return (
    <View style={styles.class}>
      <Icon 
        name="group" 
        size={24} 
        color="#00B37E" 
        style={styles.icon}  
      />
      <Text style={styles.paragraph }>
        Nome da turma
      </Text>
    </View>
  );
}
