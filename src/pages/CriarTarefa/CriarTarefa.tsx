import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Title,Input,Button,ButtonText} from './style'
import { Container } from '../Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from '../Login/style';


const CriarTarefa: React.FC = () => {
  const [tarefaName, setTarefaName] = useState<string>('');
  const [tarefaDescription, setTarefaDescription] = useState<string>('');
  const [attachment, setAttachment] = useState<string>('');

  const saveTarefa = async () => {
    try {
      const existingTarefas = await AsyncStorage.getItem('@tarefas');
      const tarefas = existingTarefas ? JSON.parse(existingTarefas) : [];
      const newTarefa = {
        id: Math.random().toString(36).substring(7),
        name: tarefaName,
        description: tarefaDescription,
        attachment: attachment,
      };
      tarefas.push(newTarefa);
      await AsyncStorage.setItem('@tarefas', JSON.stringify(tarefas));
      Alert.alert('Sucesso', 'Tarefa criada com sucesso');
      setTarefaName('');
      setTarefaDescription('');
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
      <Title>CRIAR TAREFA</Title>
      <Input
        placeholder="Nome da Tarefa"
        value={tarefaName}
        onChangeText={(value) => setTarefaName(value)}
        selectionColor="#493861"
        placeholderTextColor="#383838"
      />
      <Input
        placeholder="Descrição"
        value={tarefaDescription}
        onChangeText={(value) => setTarefaDescription(value)}
        selectionColor="#493861"
        placeholderTextColor="#383838"
      />
      <Button onPress={saveTarefa}>
        <ButtonText>CRIAR TAREFA</ButtonText>
      </Button>
      </Card>
    </Container>
  );
};

export default CriarTarefa;
