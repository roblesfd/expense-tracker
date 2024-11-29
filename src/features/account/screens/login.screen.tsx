import { View } from "react-native";
import { Container } from "../../../infrastructure/theme/global";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import { useContext, useState } from "react";
import {
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
  SuccessContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { onLogin, isLoading, error, success } = useContext(
    AuthenticationContext
  );
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
        <Button onPress={() => navigation.navigate("Registrarse" as never)}>
          ¿No tienes una cuenta? Regístrate
        </Button>
      </Spacer>
      {error && (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
      {success && (
        <SuccessContainer>
          <Text variant="success">{success}</Text>
        </SuccessContainer>
      )}
      <Spacer size="large">
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => {
              onLogin(email, password);
            }}
          >
            Ingresar
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </Spacer>
    </AccountContainer>
  );
};
