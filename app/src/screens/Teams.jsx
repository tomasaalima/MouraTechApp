import React, { useState } from "react";
import { View, Text } from "react-native";

import { styles } from "./style";
import { BillBoard } from "../components/BillBoard";
import { Input } from "../components/Input";
import { Badge } from "../components/Badge";
import { Remove } from "../components/Remove";
import { Member } from "../components/Member";

export function Teams() {
  const [ teams, setTeams ] = useState([
  <Badge key={1} text="TIME A"/>,
  <Badge key={2} text="TIME B"/>
  ]);

  const [ members, setMembers ] = useState([
    <Member key={1} name="Rodrigo Gonçalves"/>,
    <Member key={2} name="Diego Fernandes"/>
    ]);

  return (
    <View style={styles.background}>
      <BillBoard 
        title="Nome da turma" 
        subtitle="adicione a galera e separe os times"

      />
      <Input text="Nome dos participantes" rightIcon={{name: "plus", size: 22, color: "green"}}/>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 12,
        width: '90%',
      }}>
        {<View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: 5,
        }}>
          {teams}
        </View>}
        {<Text style={styles.qtt}>
          {teams.length}
        </Text>}
      </View>
      {<View style={styles.membersList}>
        {members}
      </View>}
      <Remove text="Remover turma"/>
    </View>
  );
}