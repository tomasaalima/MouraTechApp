import React from "react";
import { Text, View, Image } from "react-native";

import { styles } from "../screens/style";

import Icon from "react-native-vector-icons/FontAwesome";

export function BillBoard( props ) {
  const { img } = props;
  const { type } = props;
  const { title } = props;
  const { subtitle } = props;
  const { size } = props;


  return (
    <View style={styles.billboard}>
    {type === "img" && 
      <Image
          style={styles.logo}
          source={img}
        >
      </Image>
    }
    {type === "icon" && 
    <Icon 
        name={img} 
        size={size} 
        color="#00B37E" 
        style={styles.icon}  
    />
    }
      
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}