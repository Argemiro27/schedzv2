import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../../components";
import { Button, ButtonText } from "../CriarTarefa/style";
import { getWeatherData } from "../../services/api";
import Weather from "../../components/Weather";
import colors from "../../styles/colors";
import { Card } from "../Login/style";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgDashboard};
  padding: 20px;
  font-family: NovaFlat_400Regular;
`;

export const TextInput = styled.TextInput`
    font-family: NovaFlat_400Regular;
    color: ${colors.purpleLight};
    background-color: ${colors.purple};
    border-radius: 10px;
    width: 220px;
    height: 50px;
    margin-bottom: 40px;
    text-align: left;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    padding: 5px;
    margin-left: 5px;
    left:35px;
    top: 40px;
    z-index: 1;
`



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
      <Card>
      <View>
        {weatherData && <Weather weatherData={weatherData} />}
        <TextInput
          placeholder="Digite o nome da cidade"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#828282"
        />
        <Button onPress={handlePress}>
          <ButtonText>CONSULTAR</ButtonText>
        </Button>
      </View>
      </Card>
    </Container>
  );
};

export default Home;
