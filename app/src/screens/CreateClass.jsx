import React from "react";
import { View } from "react-native";
import { styles } from "./style";
import { ReturnBar } from "../components/ReturnBar";
import { BillBoard } from "../components/BillBoard";
import { Input } from "../components/Input";
import { NewClass } from "../components/NewClass";

export function CreateClass() {
  return (
    <View style={styles.background}>
    <ReturnBar/>
    <BillBoard 
        img="group" 
        type="icon"
        size={45}
        title="Nova Turma" 
        subtitle="crie uma turma para adicionar pessoas"

    />
    <Input text="Nome da turma"/>
    <View style={{
      width: '90%',
      paddingTop: 15,
    }}>
      <NewClass text="Criar"/>
    </View>
    </View>
  );
}