import React from "react";
import { Text, View } from "react-native";

import { styles } from "../screens/style";

export function NewClass(props) {
  const { text } = props;

  return (
    <View style={styles.newClass}>
      <Text style={styles.paragraph }>
        {text}
      </Text>
    </View>
  );
}