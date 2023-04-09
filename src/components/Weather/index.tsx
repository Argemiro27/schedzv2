import React from "react";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type WeatherProps = {
  weatherData: any;
};

const WeatherContainer = styled.View`
     font-family: NovaFlat_400Regular;
  border-radius: 10px;
  margin-bottom: -20px;
`;

const WeatherTitle = styled.Text`
    font-family: NovaFlat_400Regular;
  font-size: 20px;
  text-align: center;
  color: #84699b;
  margin-bottom: 10px;
  background-color: ${colors.purple};
  padding: 5px;
  border-radius: 10px;
`;

const WeatherCardWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WeatherCard = styled.View`

  height: 120px;
  width: 130px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: ${colors.black};
  border: 2px solid ${colors.deeppurple};
  margin: 10px;
`;

const WeatherIcon = styled(MaterialCommunityIcons)`
  margin-right: 10px;
  color: ${colors.grayLight};
`;

const WeatherText = styled.Text`
  font-family: NovaFlat_400Regular;
  font-size: 16px;
  color: ${colors.grayLight};
  text-align: center;
`;

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  let precipitationDescription = "Sem previsão.";

  if (weatherData.results.forecast[0].rain > 0) {
    if (weatherData.results.forecast[0].rain < 3) {
      precipitationDescription = "Chuviscos";
    } else if (weatherData.results.forecast[0].rain < 10) {
      precipitationDescription = "Chuva leve";
    } else if (weatherData.results.forecast[0].rain < 30) {
      precipitationDescription = "Chuva moderada";
    } else {
      precipitationDescription = "Chuva forte";
    }
  }

  return (
    <WeatherContainer>
      <WeatherTitle>Meteorologia: {weatherData.results.city}</WeatherTitle>
      <WeatherCardWrapper>
        <WeatherCard>
          <WeatherIcon name="thermometer" size={24} color={colors.white} />
          <WeatherText>Temperatura: {weatherData.results.temp}°C</WeatherText>
        </WeatherCard>
        <WeatherCard>
          <WeatherIcon name="weather-windy" size={24} color={colors.white} />
          <WeatherText>Vento: {weatherData.results.wind_speedy}</WeatherText>
        </WeatherCard>
      </WeatherCardWrapper>
      <WeatherCardWrapper>
        <WeatherCard>
          <WeatherIcon name="water" size={24} color={colors.white} />
          <WeatherText>Umidade: {weatherData.results.humidity}%</WeatherText>
        </WeatherCard>
        <WeatherCard>
          <WeatherIcon name="weather-rainy" size={24} color={colors.white} />
          <WeatherText>Previsão de chuva: {precipitationDescription}</WeatherText>
        </WeatherCard>
      </WeatherCardWrapper>
    </WeatherContainer>
  );
};

export default Weather;
