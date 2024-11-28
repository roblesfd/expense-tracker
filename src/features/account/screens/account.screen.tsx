import { Text, View } from "react-native";
import { Container } from "../../../infrastructure/theme/global";
import {} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { AccountContainer } from "../components/account.styles";

export const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <AccountContainer>
      <Text>Inicio</Text>
      <Button onPress={() => navigation.navigate("Ingresar" as never)}>
        Iniciar sesión
      </Button>
    </AccountContainer>
  );
};
