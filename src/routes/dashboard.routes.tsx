import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  PixelRatio,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import colors from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import CriarTarefa from "../pages/CriarTarefa/CriarTarefa";
import Home from "../pages/Home";
import Camera from "../pages/Camera";
import File from "../pages/File";
import Sair from "../pages/Sair";
import { NovaFlat_400Regular, useFonts } from "@expo-google-fonts/nova-flat";
import MinhasTarefas from "../pages/MinhasTarefas/Tarefas";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContainer}>
        <ImageBackground
          source={require("../../assets/bgDrawer.png")}
          style={styles.drawerImage}
        >
          <DrawerItemList {...props} />
        </ImageBackground>
      </View>
    </DrawerContentScrollView>
  );
}

export default function DashboardRoute() {
  let [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
  });
  return (
    <>
      {fontsLoaded && (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={({ route }) => ({
            headerShown: true,
            headerStyle: { backgroundColor: colors.purple },
            headerTintColor: colors.white,
            headerTitle: () => <Text style={styles.title}>Schedz Agenda</Text>,
            drawerInactiveTintColor: colors.white,
            drawerActiveTintColor: colors.black,
            drawerActiveBackgroundColor: colors.purple,
            drawerInactiveBackgroundColor: colors.purple,
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
              } else if( route.name === "Minhas Tarefas"){
                iconName = focused ? "list" : "list-outline";
              } else if (route.name === "Carregar um arquivo") {
                iconName = focused ? "document-text" : "document-text-outline";
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
          <Drawer.Screen name="Tirar uma foto" component={Camera} />
          <Drawer.Screen name="Carregar um arquivo" component={File} />
          <Drawer.Screen name="Sair" component={Sair} />
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
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
