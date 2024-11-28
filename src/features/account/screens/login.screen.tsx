import { View } from "react-native";
import { Container } from "../../../infrastructure/theme/global";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useState } from "react";
import {
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <AccountContainer>
      <Title variant="body">Iniciar sesión</Title>
      <Spacer size="large">
        <AuthInput
          label="Correo electrónico"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
      </Spacer>
      <Spacer size="large">
        <AuthInput
          label="Contraseña"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
      </Spacer>
      <Spacer size="large">
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => console.log(email, password)}
        >
          Ingresar
        </AuthButton>
      </Spacer>
      {/* <Button onPress={() => navigation.goBack()}>Volver al inicio</Button> */}
    </AccountContainer>
  );
};
