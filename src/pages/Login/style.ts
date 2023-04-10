import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { View } from "react-native";
import styled from "styled-components/native"
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 36px;
    color: ${colors.deeppurple};
    font-weight: 500;
    top: 45px;
    left: 35px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const Form = styled.KeyboardAvoidingView`
    position: absolute;
    right: 60px;
    top: 170px;
    
`

export const Card = styled(View)`
  background-color: #421f6e;
  border-radius: 10px;
  height: 600px;
  width: 300px;
  display: flex;
  align-self: center;
  
`;

export const FormRow = styled.View`
    flex-direction: row;
    margin-top: 10px;
`

export const TextInput = styled.TextInput`
    font-family: NovaFlat_400Regular;
    color: ${colors.purpleLight};
    background-color: ${colors.black};
    border: 2px solid ${colors.purpleBorder};
    border-radius: 10px;
    width: 250px;
    height: 50px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 15px;
    padding: 5px;
    margin-left: 5px;
    left:35px;
    top: 40px;
    z-index: 1;
`

