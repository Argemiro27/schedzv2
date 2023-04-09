import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #2b234e;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
    font-family: Pacifico-Regular;
    font-size: 36px;
    color: #828282;
    font-weight: 500;
    top: 20px;
    text-align: center;
`

export const Text = styled.Text`
  font-size: 20px;
  color: #b8b6c8;
`

export const Roboto = {
  fontFamily: 'Roboto',
};

export const Button = styled.TouchableOpacity`
  background-color: blueviolet;
  border-color: blue;
`