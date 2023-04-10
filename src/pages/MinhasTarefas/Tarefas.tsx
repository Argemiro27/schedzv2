import React, { useEffect, useState } from "react";
import { FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { Container } from "../Home";
import { MaterialIcons } from "@expo/vector-icons";
import { TarefaCard, TarefaName, TarefaDescription, AttachmentText, DeleteButton, DeleteButtonText } from './style';

interface Tarefa {
  id: string;
  name: string;
  description: string;
  attachment: string;
}

const MinhasTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getTarefas = async () => {
      try {
        const existingTarefas = await AsyncStorage.getItem("@tarefas");
        const parsedTarefas = existingTarefas ? JSON.parse(existingTarefas) : [];
        setTarefas(parsedTarefas);
      } catch (error) {
        Alert.alert("Erro", "Erro ao buscar tarefas");
      }
    };

    getTarefas();
  }, [isFocused]);

  const deleteTarefa = async (id: string) => {
    try {
      const existingTarefas = await AsyncStorage.getItem("@tarefas");
      const parsedTarefas = existingTarefas ? JSON.parse(existingTarefas) : [];
      const updatedTarefas = parsedTarefas.filter((tarefa: Tarefa) => tarefa.id !== id);
      await AsyncStorage.setItem("@tarefas", JSON.stringify(updatedTarefas));
      setTarefas(updatedTarefas);
      Alert.alert("Sucesso", "Tarefa excluída com sucesso");
    } catch (error) {
      Alert.alert("Erro", "Erro ao excluir tarefa");
    }
  };

  return (
    <Container>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarefaCard>
            <TarefaName>Nome da tarefa: {item.name}</TarefaName>
            <TarefaDescription>Descrição: {item.description}</TarefaDescription>
            {item.attachment !== "" && (
              <AttachmentText>{item.attachment}</AttachmentText>
            )}
            <DeleteButton onPress={() => deleteTarefa(item.id)}>
              <MaterialIcons name="delete-forever" size={25} color="#6e1a20" />
              <DeleteButtonText>Excluir</DeleteButtonText>
            </DeleteButton>
          </TarefaCard>
        )}
      />
    </Container>
  );
};

export default MinhasTarefas;
