import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Cadastrar } from "../pages";
import DashboardStack from "./dashboard.routes";
import { LoginStackParamList } from "../types/ScreenStack.types";

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Dashboard" component={DashboardStack} />
    </Stack.Navigator>
  );
}
