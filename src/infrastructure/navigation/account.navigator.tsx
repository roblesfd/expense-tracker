import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../../features/user-account/screens/login.screen";
import { SignupScreen } from "../../features/user-account/screens/signup.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ingresar" component={LoginScreen} />
      <Stack.Screen name="Registrarse" component={SignupScreen} />
    </Stack.Navigator>
  );
};
