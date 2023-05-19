import React from "react";
import { Text, View } from "react-native";

import { styles } from "../screens/style";

import Icon from "react-native-vector-icons/FontAwesome";

export function Input( props ) {
  const { rightIcon } = props;
  const { text } = props;

  return (
    <View style={styles.input}>
      <Text style={styles.textInput}>
        {text}
      </Text>
      {rightIcon &&
        <Icon
          name={rightIcon.name}
          size={rightIcon.size}
          color={rightIcon.color}
          style={styles.icon}
        />
      }
    </View>
  );
}