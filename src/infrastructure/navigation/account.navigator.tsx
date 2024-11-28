import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { SignupScreen } from "../../features/account/screens/signup.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ingresar" component={LoginScreen} />
      <Stack.Screen name="Inicio" component={AccountScreen} />
      <Stack.Screen name="Registrarse" component={SignupScreen} />
    </Stack.Navigator>
  );
};
