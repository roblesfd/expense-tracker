import React, { useContext } from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useModal } from "../../../components/modal/modal.context";

const Summary = () => {
  const { isLoading, onLogout } = useContext(AuthenticationContext);
  const { showModal, setModal } = useModal();
  const content = (
    <Text variant="body">
      Example Modal. Click outside this area to dismiss.
    </Text>
  );

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
      <Spacer size="large">
        <Button
          onPress={() => {
            showModal();
            setModal(content);
          }}
          mode="contained"
        >
          Modal
        </Button>
      </Spacer>
    </View>
  );
};

export default Summary;
