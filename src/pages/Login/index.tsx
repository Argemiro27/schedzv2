import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { Button, Header, Loading } from "../../components";
import { Alert } from "react-native";
import { Form, Container, FormRow, TextInput, Title, Card } from "./style";
import { useAuth } from "../../hook/auth";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/ScreenStack.types";
import { useFonts, NovaFlat_400Regular } from "@expo-google-fonts/nova-flat";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { ImageBackground } from 'react-native';

export default function Login({ navigation }: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);
  let [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
    Pacifico_400Regular,
  });

  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }

  async function handleSignIn() {
    try {
      setIsLoading(true);
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
        setIsLoading(false);
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
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setIsLoading(false);
  }, []);

  function handleDashboardStack() {
    navigation.navigate("Dashboard");
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
    <>
      {fontsLoaded && (
        <ImageBackground source={image} style={{ flex: 1 }}>
        <Container>
          <Card>
          <Header image={require("../../../assets/logo1.png")} name={"cabecalho"}/>
            <Form>
              <Title style={{ fontFamily: "Pacifico_400Regular" }}>Login</Title>
              <FormRow>
                <TextInput
                  selectionColor="#493861"
                  onChangeText={(i: string) => handleChange({ email: i })}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder=" Email"
                  placeholderTextColor="#383838"
                ></TextInput>
              </FormRow>
              <FormRow>
                <TextInput
                  selectionColor="#493861"
                  secureTextEntry={true}
                  onChangeText={(i: string) => handleChange({ password: i })}
                  placeholder=" Senha"
                  placeholderTextColor="#383838"
                ></TextInput>
              </FormRow>
              <Button title="ENTRAR" onPress={handleDashboardStack} />
              <Button title="CADASTRAR-SE" onPress={handleCadastrar} />
            </Form>
          </Card>
        </Container>
        </ImageBackground>
      )}
    </>
  );

  
}
