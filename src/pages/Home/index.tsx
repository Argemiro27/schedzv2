import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Button, Loading } from "../../components";
import { getWeatherData } from "../../services/api";
import { TextInput, Title } from "../Login/style";
import Weather from "../../components/Weather";

export const Container = styled.View`
  flex: 1;
  background-color: #28015a;
  padding: 20px;
  font-family: NovaFlat_400Regular;
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    async function fetchWeatherData() {
      const data = await getWeatherData("São Paulo");
      setWeatherData(data);
    }
    fetchWeatherData();
  }, []);

  const handlePress = async () => {
    const data = await getWeatherData(city);
    setWeatherData(data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <View>

        {weatherData && <Weather weatherData={weatherData} />}
        <TextInput
          placeholder="Digite o nome da cidade"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#383838"
        />
        <Button title="CONSULTAR" onPress={handlePress} />
      </View>
    </Container>
  );
};

export default Home;
