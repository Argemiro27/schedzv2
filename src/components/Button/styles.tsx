import styled from "styled-components/native"
import colors from "../../styles/colors"

export const ButtonStyle = styled.TouchableOpacity`
    width: 220px;
    height: 47px;
    background-color: ${colors.deeppurple};
    margin-top: 15px;
    border-radius: 10px;
    left:55px;
    top: 40px;
`

export const ButtonStyleText = styled.Text`
    font-family: NovaFlat_400Regular;
    color: ${colors.purpleLight};
    font-size: 15px;
    text-align: center;
    padding: 16px;

`