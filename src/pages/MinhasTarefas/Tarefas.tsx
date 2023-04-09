import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { Container } from "../Home";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

const TaskCard = styled.View`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${colors.purple};
  font-family: NovaFlat_400Regular;
`;

const TaskName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #7d68a0;
`;

const TaskDescription = styled.Text`
  color: ${colors.purpleLight};
  font-size: 16px;
  margin-bottom: 5px;
`;

const AttachmentText = styled.Text`
  font-size: 14px;
  color: #aaa;
  
`;

const DeleteButton = styled.TouchableOpacity`
  background-color: #ac1212;
  padding: 15px 10px;
  border-radius: 5px;
  height: 50px;
  width: 70px;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
  align-self: flex-end;
`;

const DeleteButtonText = styled.Text`
  color: #da5c5c;
  font-weight: bold;
`;

interface Task {
  id: string;
  name: string;
  description: string;
  attachment: string;
}

const MinhasTarefas: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const existingTasks = await AsyncStorage.getItem("@tasks");
        const parsedTasks = existingTasks ? JSON.parse(existingTasks) : [];
        setTasks(parsedTasks);
      } catch (error) {
        Alert.alert("Erro", "Erro ao buscar tarefas");
      }
    };

    getTasks();
  }, [isFocused]);

  const deleteTask = async (id: string) => {
    try {
      const existingTasks = await AsyncStorage.getItem("@tasks");
      const parsedTasks = existingTasks ? JSON.parse(existingTasks) : [];
      const updatedTasks = parsedTasks.filter((task: Task) => task.id !== id);
      await AsyncStorage.setItem("@tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      Alert.alert("Sucesso", "Tarefa excluída com sucesso");
    } catch (error) {
      Alert.alert("Erro", "Erro ao excluir tarefa");
    }
  };

  return (
    <Container>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard>
            <TaskName>Nome da tarefa: {item.name}</TaskName>
            <TaskDescription>Descrição: {item.description}</TaskDescription>
            {item.attachment !== "" && (
              <AttachmentText>{item.attachment}</AttachmentText>
            )}
            <DeleteButton onPress={() => deleteTask(item.id)}>
              <MaterialIcons name="delete-forever" size={25} color="#da5c5c" />
              <DeleteButtonText>Excluir</DeleteButtonText>
            </DeleteButton>
          </TaskCard>
        )}
      />
    </Container>
  );
};

export default MinhasTarefas;
