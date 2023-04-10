import React from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import colors from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import CriarTarefa from "../pages/CriarTarefa/CriarTarefa";
import Home from "../pages/Home";
import { NovaFlat_400Regular, useFonts } from "@expo-google-fonts/nova-flat";
import MinhasTarefas from "../pages/MinhasTarefas/Tarefas";
import { Profile } from "../pages";

const Drawer = createDrawerNavigator();

export default function DashboardRoute() {
  let [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
  });
  return (
    <>
      {fontsLoaded && (
        <Drawer.Navigator

          screenOptions={({ route }) => ({
            headerShown: true,
            headerStyle: { backgroundColor: colors.purple },
            headerTintColor: colors.bgDashboard,
            headerTitle: () => (
              <Text style={styles.title}>Schedz Agenda</Text>
            ),
            drawerInactiveTintColor: colors.white,
            drawerActiveTintColor: colors.black,
            drawerActiveBackgroundColor: colors.purple,
            drawerInactiveBackgroundColor: colors.purple,
            drawerContentStyle: { backgroundColor: "#131313" },
            drawerIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Criar Tarefa") {
                iconName = focused
                  ? "checkmark-circle"
                  : "checkmark-circle-outline";
              } else if (route.name === "Tirar uma foto") {
                iconName = focused ? "camera" : "camera-outline";
              } else if (route.name === "Minhas Tarefas") {
                iconName = focused ? "list" : "list-outline";
              } else if (route.name === "Carregar um arquivo") {
                iconName = focused
                  ? "document-text"
                  : "document-text-outline";
              } else if (route.name === "Perfil") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Sair") {
                iconName = focused ? "exit" : "exit-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Criar Tarefa" component={CriarTarefa} />
          <Drawer.Screen name="Minhas Tarefas" component={MinhasTarefas} />
          <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
        
      )}
    </>
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    marginTop: -5,
  },
  drawerImage: {
    flex: 1,
    resizeMode: "cover",
    width: width,
    height: height,
    opacity: 1,
  },
  title: {
    color: colors.bgDashboard,
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "NovaFlat_400Regular",
  },
});
