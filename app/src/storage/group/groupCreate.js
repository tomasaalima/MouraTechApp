import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupGetAll } from "./groupGetAll";
import { Alert } from "react-native/types";

export async function groupCreate(newGroup) {
  try {
    const storagedGroups = await groupGetAll();
    const groupAlreadyExists = storagedGroups.includes(newGroup);

    if (groupAlreadyExists) {
        Alert.alert("Já existe esse grupo")

    } else {
      const storage = JSON.stringify(...storagedGroups, newGroup);
      await AsyncStorage.setItem(GROUP_COLLECTION, newGroup);

    }

    
  } catch (error) {
    throw error;
  }
} 