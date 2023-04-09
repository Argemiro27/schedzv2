import React, { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/core";
import { Button, ButtonText, Header, Loading } from "../../components";

import { Form, Container, FormRow, TextInput, Title, Card } from "./style";
import { LoginTypes } from "../../types/ScreenStack.types";
import { Ionicons } from "@expo/vector-icons";
import { IUser, IRegister } from "../../interfaces/User.interface";
import { AxiosError } from "axios";
import {useAuth} from "../../hook/auth";
import {
  Alert, ImageBackground,
} from "react-native";

export default function Cadastrar({ navigation }: LoginTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);

  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }

  function handleLogin() {
    navigation.navigate("Login");
  }

  async function handleRegister() {
    try {
      setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  const image = require('../../../assets/bgLogin.png');
  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
    <Container>
      <Card>
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={handleLogin}
          style={{ position: "absolute", top: 40, left: 20, zIndex: 1 }}
        />
        <Header
          image={require("../../../assets/logo1.png")}
          name={"cabecalho"}
        />

        <Form>
          <Title style={{ fontFamily: "Pacifico_400Regular" }}>Cadastro</Title>
          <FormRow>
            <TextInput
              placeholder=" Email"
              autoCapitalize="none" 
              selectionColor="#493861"
              placeholderTextColor="#383838"
              onChangeText={(i: string) => handleChange({ email: i })}
              keyboardType="email-address"
            ></TextInput>
          </FormRow>
          <FormRow>
            <TextInput
              placeholder=" Usuário"
              selectionColor="#493861"
              onChangeText={(i: string) => handleChange({ name: i })}
              placeholderTextColor="#383838"
            ></TextInput>
          </FormRow>
          <FormRow>
            <TextInput
              placeholder=" Senha"
              selectionColor="#493861"
              secureTextEntry={true}
              onChangeText={(i: string) => handleChange({ password: i })}
              placeholderTextColor="#383838"
            ></TextInput>
          </FormRow>
          <Button title="CADASTRAR" onPress={handleLogin} />
        </Form>
      </Card>
    </Container>
    </ImageBackground>
  );
}
