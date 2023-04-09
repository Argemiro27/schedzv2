import React from 'react'
import {ButtonProps} from "../../interfaces/Button.interface"
import {ButtonStyle,ButtonStyleText} from "./styles"

export default function ButtonText({title, onPress}:ButtonProps){
    return(
        <ButtonStyle onPress={onPress}>
            <ButtonStyleText>{title}</ButtonStyleText>
        </ButtonStyle>
    )
}