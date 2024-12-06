import {
  Button,
  Dialog,
  IconButton,
  PaperProvider,
  Portal,
  Text,
} from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import Container from "../../../components/container/container.component";
import { useTheme } from "styled-components/native";
import { FlatList, View } from "react-native";
import { mockCategoryList } from "../../../utils/mockData";
import FlexLayout from "../../../components/display/flex.component";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const IncomeCategories = () => {
  const theme = useTheme();
  const filteredIncomes = mockCategoryList.filter(
    (item) => item.transactionType === "ingreso"
  );
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <PaperProvider>
      <Spacer size="2xl" position="bottom">
        <Portal>
          <Container variant="fullHeight" borderColor={theme.colors.ui.primary}>
            <Spacer size="medium" position="top">
              <FlatList
                data={filteredIncomes}
                renderItem={({ item }) => (
                  <FlexLayout>
                    <FlexLayout
                      direction="row"
                      justifyContent="start"
                      alignItems="center"
                      gap={10}
                    >
                      <View
                        style={{
                          backgroundColor: item.color,
                          padding: 7,
                          borderRadius: 100,
                        }}
                      >
                        <Ionicons
                          name={item.icon as keyof typeof Ionicons.glyphMap}
                          size={25}
                          color="white"
                        />
                      </View>
                      <Text>{item.name}</Text>
                    </FlexLayout>
                    <IconButton
                      icon="trash-can"
                      iconColor={theme.colors.brand.primary}
                      size={25}
                      onPress={() => showDialog()}
                    />
                  </FlexLayout>
                )}
              />
            </Spacer>
          </Container>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Advertencia</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">
                Las transacciones asociadas a esta categoria no serán
                eliminadas, serán trasladadas a la categoría del sistema llamada
                "Otros"
              </Text>
              <Spacer size="medium" position="top">
                <Text variant="bodyMedium">
                  ¿Deseas eliminar esta categoría?
                </Text>
              </Spacer>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancelar</Button>

              <Button onPress={hideDialog}>Eliminar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Spacer>
    </PaperProvider>
  );
};

export default IncomeCategories;
