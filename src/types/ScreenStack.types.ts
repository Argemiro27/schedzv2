import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from "react-native"

// Login Stack
export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  Dashboard: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
