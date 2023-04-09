import styled from "styled-components/native"
import colors from "../../styles/colors"

export const ButtonStyle = styled.TouchableOpacity`
    width: 151px;
    height: 42px;
    background-color: ${colors.purple};
    margin-top: 10px;
    left:175px;
    top: 50px;
`

export const ButtonStyleText = styled.Text`
    font-family: NovaFlat_400Regular;
    color: ${colors.grayLight};
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    text-align: center;
    padding: 10px;
`
