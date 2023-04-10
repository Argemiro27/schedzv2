import React from "react";
import LottieView from "lottie-react-native";
import loadingLottie from "../../lotties/loading.json";
import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import colors from "../../styles/colors";

const image = require('../../../assets/bgLogin.png');

const LoadingWrapper = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.purple};
  border-radius: 200px;
  padding: 50px;
  max-width: 80%;
  max-height: 50%;
  align-self: center;
  border: 2px solid #351550;
`;

const LoadingAnimation = styled(LottieView)`
  background-color: transparent;
  width: 200px;
  height: 200px;
`;

export default function Loading() {
  return (
    <LoadingWrapper source={image}>
      <Container>
        <LoadingAnimation
          source={loadingLottie}
          autoPlay
          loop
        />
      </Container>
    </LoadingWrapper>
  );
}
