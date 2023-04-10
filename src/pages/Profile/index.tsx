import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../Home";
import {
  ProfileImage,
  ProfileImageContainer,
  ChangeProfileImageText,
  ItemContainer,
  Label,
} from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "../Login/style";
import { Button, ButtonText } from "../CriarTarefa/style";

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const [profileImage, setProfileImage] = useState<string | null>(
    "https://placeimg.com/640/480/animals"
  );
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handlePickProfileImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  const handleSaveChanges = async () => {
    try {
      // Obtém os dados salvos anteriormente
      const profileData = await AsyncStorage.getItem("profileData");
      const parsedProfileData = JSON.parse(profileData);

      // Atualiza os dados do perfil com as informações fornecidas pelo usuário
      const updatedProfileData = {
        ...parsedProfileData,
        name,
        email,
        profileImage: profileImage || parsedProfileData.profileImage,
      };

      // Salva os dados atualizados no Async Storage
      await AsyncStorage.setItem(
        "profileData",
        JSON.stringify(updatedProfileData)
      );
      setIsSaved(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Obtém os dados salvos no Async Storage
        const profileData = await AsyncStorage.getItem("profileData");
        const parsedProfileData = JSON.parse(profileData);

        // Atualiza o estado com as informações do perfil
        setName(parsedProfileData.name);
        setEmail(parsedProfileData.email);
        setProfileImage(parsedProfileData.profileImage);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileData();
  }, []);
  return (
    <Container>
      <Card>
        <ProfileImageContainer>
          <TouchableOpacity onPress={handlePickProfileImage}>
            <ProfileImage source={{ uri: profileImage! }} />
            <ChangeProfileImageText>
              Mudar foto de perfil
            </ChangeProfileImageText>
          </TouchableOpacity>
        </ProfileImageContainer>
        <ItemContainer>
          <Label>Nome:</Label>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{ color: "white" }}
          />
        </ItemContainer>
        <ItemContainer>
          <Label>Email:</Label>
          <TextInput 
            value={email} 
            onChangeText={(text) => setEmail(text)}
            style={{ color: "white" }}
          />
        </ItemContainer>
        <Button onPress={handleSaveChanges}>
          <ButtonText>SALVAR MUDANÇAS</ButtonText>
        </Button>
        {isSaved && (
          <Text style={{ color: "green", textAlign: "center" }}>
            As informações foram salvas com sucesso!
          </Text>
        )}
      </Card>
    </Container>
  );
};

export default Profile;
function setIsSaved(arg0: boolean) {
  throw new Error("Function not implemented.");
}
