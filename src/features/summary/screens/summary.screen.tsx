import React, { useContext } from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const Summary = () => {
  const { isLoading, onLogout } = useContext(AuthenticationContext);
  return (
    <View>
      <Text variant="body">Summary</Text>
      <Spacer size="large">
        {!isLoading ? (
          <Button
            icon="lock-open-outline"
            mode="contained"
            onPress={() => {
              onLogout();
            }}
          >
            Cerrar sesión
          </Button>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </Spacer>
    </View>
  );
};

export default Summary;
