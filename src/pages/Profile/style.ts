
import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgDashboard};

`;

export const ProfileImageContainer = styled.View`
  align-items: center;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 2px solid ${colors.deeppurple};
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ChangeProfileImageText = styled.Text`
  color: ${colors.purpleLight};
  background-color: ${colors.purple};
  padding: 15px;
  align-items: center;
  justify-content: center;
  align-self: center;
  font-weight: bold;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
`;

export const ItemContainer = styled.View`
  padding: 20px;
  background-color: ${colors.black};
  
  margin: 10px;
  border-radius: 10px;
`;


export const Label = styled.Text`
  color: ${colors.purpleLight};
  font-size: 18px;
  font-weight: bold;
  
`;

export const Value = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;
