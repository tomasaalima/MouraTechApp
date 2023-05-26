import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "../screens/style";
import { useNavigation } from "@react-navigation/native";
import { groupGetAll } from "../storage/group/groupGetAll";

export function NewClass(props) {
  const { text } = props;
  const [ group, setGroup ] = useState();
  const navigation = useNavigation();

  useEffect(() => {

  }, []); 

  async function fetchGroups() {
    try {
      const data =  await groupGetAll();
      setGroup(data)
    } catch (error) {
      throw error;
    }
  };

  async function handleAdd() {
    navigation.navigate('class');
  }

  return (
      <Pressable 
        style={styles.newClass }
        onPress={() => navigation.navigate('class')}
      >
        <Text style={styles.paragraph}>
        {text}
        </Text>
      </Pressable>
  );
}