import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { Class } from "../components/Class";
import { NewClass } from "../components/NewClass";

import { styles } from "./style";
import { BillBoard } from "../components/BillBoard";

export function Home() {
  return (
    <View style={styles.background}>
      <BillBoard 
        img={require("../../assets/moura/moura.png")} 
        type="img" 
        title="Turmas" 
        subtitle="jogue com a sua turma"

      />
      <ScrollView style={styles.classList}>
        <Class/>
        <Class/>
      </ScrollView>
      <NewClass text="Criar nova turma"/>
    </View>
  );
}