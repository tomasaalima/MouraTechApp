import React from "react";
import { View, Text } from "react-native";

import { styles } from "../screens/style";

export function Remove(props) {
  const { text } = props;

  return (
    <View style={styles.remove}>
      <Text style={styles.paragraph }>
        {text}
      </Text>
    </View>
  );
}