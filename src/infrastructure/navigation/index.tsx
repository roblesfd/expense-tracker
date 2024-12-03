import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app.navigator";
import FloatingButtonContainer from "../../components/button/floating-button.component";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <FloatingButtonContainer onPress={() => console.log("dentro")}>
          <AppNavigator />
        </FloatingButtonContainer>
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};
