import styled from "styled-components/native";
import colors from "../../styles/colors";

export const TarefaCard = styled.View`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${colors.purple};
`;

export const TarefaName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #000;
  font-family: NovaFlat_400Regular;
`;

export const TarefaDescription = styled.Text`
  color: #000;
  font-size: 16px;
  margin-bottom: 5px;
  font-family: NovaFlat_400Regular;
`;

export const AttachmentText = styled.Text`
  font-size: 14px;
  color: #aaa;
  font-family: NovaFlat_400Regular;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: #d12c38;
  padding: 15px 10px;
  border-radius: 5px;
  height: 50px;
  width: 70px;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
  align-self: flex-end;
  font-family: NovaFlat_400Regular;
`;

export const DeleteButtonText = styled.Text`
  color: #6e1a20;
  font-weight: bold;
  font-family: NovaFlat_400Regular;
`;