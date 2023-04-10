import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Title = styled.Text`
  font-family: NovaFlat_400Regular;
  font-size: 15px;
  text-align: center;
  color: #84699b;
  margin-bottom: 10px;
  background-color: ${colors.purple};
  padding: 15px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  align-self: center;
  width: 250px;
  height: 50px;
  background-color: ${colors.black};
  border: 2px solid ${colors.purpleBorder};
  color: #383838;
  font-family: NovaFlat_400Regular;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 5px;
  width: 150px;
  height: 40px;
  background-color: #23cf5c;
  justify-content: flex-start;
  align-self: center;
  margin-top: 20px;
  font-family: NovaFlat_400Regular;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #209146;
  font-size: 15px;
  text-align: center;
  font-family: NovaFlat_400Regular;
`;
