import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import { useContext, useState } from "react";
import {
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  SuccessContainer,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Container } from "../../../infrastructure/theme/global";

export const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const { onRegister, isLoading, error, success } = useContext(
    AuthenticationContext
  );

  return (
    <AccountContainer>
      <Title variant="body">Registro de cuenta</Title>
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
        <AuthInput
          label="Repite la contraseña"
          value={repeatPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatPassword(p)}
        />
        <Button onPress={() => navigation.navigate("Ingresar" as never)}>
          ¿Ya estás registrado? Ingresar
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
              onRegister(email, password, repeatPassword);
            }}
          >
            Registrarme
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </Spacer>
    </AccountContainer>
  );
};
