import React from "react";
import { AuthProvider } from "./src/hook/auth";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
import colors from "./src/styles/colors";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor={colors.bgDashboard} />
      <Routes />
    </AuthProvider>
  );
}
