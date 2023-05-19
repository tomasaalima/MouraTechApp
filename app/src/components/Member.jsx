import React from "react";
import { View, Text } from "react-native";

import { styles } from "../screens/style";

import Icon from "react-native-vector-icons/FontAwesome";

export function Member(props) {
  const { name } = props;

  return (
    <View style={styles.member}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
      }}>
        <Icon
          name="user"
          size={24}
          color="#CCC"
          style={styles.icon}
        />
        <Text style={styles.memberName}>
          {name}
        </Text>
      </View>
      <Icon
          name="close"
          size={24}
          color="#AA2834"
          style={{
            alignSelf: 'center',
            width: 30,
          }}
        />
    </View>
  );
}