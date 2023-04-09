import React from "react";
import LottieView from "lottie-react-native";
import loadingLottie from "../../lotties/loading.json";
import { StyleSheet, View, ImageBackground } from "react-native";

const image = require('../../../assets/bgLogin.png');

export default function Loading() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <LottieView
          source={loadingLottie}
          autoPlay
          loop
          style={styles.loading}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    backgroundColor: "transparent",
  },
});
