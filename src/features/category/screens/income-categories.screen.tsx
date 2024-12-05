import { IconButton, Text } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import Container from "../../../components/container/container.component";
import { useTheme } from "styled-components/native";
import { FlatList, View } from "react-native";
import { mockCategoryList } from "../../../utils/mockData";
import FlexLayout from "../../../components/display/flex.component";
import { Ionicons } from "@expo/vector-icons";

const IncomeCategories = () => {
  const theme = useTheme();
  const filteredIncomes = mockCategoryList.filter(
    (item) => item.transactionType === "ingreso"
  );
  return (
    <Spacer size="2xl" position="bottom">
      <Container borderColor={theme.colors.ui.primary}>
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
                      padding: 5,
                      borderRadius: 6,
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
                  onPress={() => console.log("nigger")}
                />
              </FlexLayout>
            )}
          />
        </Spacer>
      </Container>
    </Spacer>
  );
};

export default IncomeCategories;
