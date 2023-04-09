import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Title,Input,Button,ButtonText} from './style'
import { Container } from '../Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from '../Login/style';


const CriarTarefa: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [attachment, setAttachment] = useState<string>('');

  const saveTask = async () => {
    try {
      const existingTasks = await AsyncStorage.getItem('@tasks');
      const tasks = existingTasks ? JSON.parse(existingTasks) : [];
      const newTask = {
        id: Math.random().toString(36).substring(7),
        name: taskName,
        description: taskDescription,
        attachment: attachment,
      };
      tasks.push(newTask);
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      Alert.alert('Sucesso', 'Tarefa criada com sucesso');
      setTaskName('');
      setTaskDescription('');
      setAttachment('');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao criar tarefa');
    }
  };

  const handleFileSelection = (fileUri: string) => {
    setAttachment(fileUri);
  };

  return (
    <Container>
      <Card>
      <Title>Criar Tarefa</Title>
      <Input
        placeholder="Nome da Tarefa"
        value={taskName}
        onChangeText={(value) => setTaskName(value)}
        selectionColor="#493861"
        placeholderTextColor="#383838"
      />
      <Input
        placeholder="Descrição"
        value={taskDescription}
        onChangeText={(value) => setTaskDescription(value)}
        selectionColor="#493861"
        placeholderTextColor="#383838"
      />
      <Button onPress={saveTask}>
        <ButtonText>CRIAR TAREFA</ButtonText>
      </Button>
      </Card>
    </Container>
  );
};

export default CriarTarefa;
