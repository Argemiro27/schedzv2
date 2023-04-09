
import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  align-self: center;
`;

export const Input = styled.TextInput`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${colors.black};
  border: 2px solid ${colors.purpleBorder};
  border-radius: 10px;
  align-self: center;
  width: 250px;
  height: 50px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 5px;
  width: 150px;
  height: 60px;
  background-color: #548735;
  justify-content: flex-start;
  align-self: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
    color: #89ba6a;
    font-size: 15px;
    text-align: center;
`;

