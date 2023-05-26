import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./AppRoutes";

export function Routes() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'gray'
    }}>
      <NavigationContainer>
        <AppRoutes></AppRoutes>
      </NavigationContainer>
    </View>
  );
}