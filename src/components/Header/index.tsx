import React from "react";
import { Image } from "react-native";
import { HeaderProps } from "../../interfaces/Header.interface";
import {
  HeaderStyle,
  HeaderImage,
} from "./styles";

export default function Header({ image }: HeaderProps) {
  return (
    <HeaderStyle>
      <HeaderImage>
        <Image id="logo" source={image} />
      </HeaderImage>
    </HeaderStyle>
  );
}