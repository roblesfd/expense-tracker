import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";
import TransactionProps from "../../../types/transaction.type";
import { Ionicons } from "@expo/vector-icons";

const TransactionItemDetailContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-horizontal: 10px;
  padding-vertical: 15px;
  border-radius: 5px;
`;

const TransactionItemDetailTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

type TransactionItemDetailProps = {
  transaction: TransactionProps;
};

const TransactionItemDetail = ({ transaction }: TransactionItemDetailProps) => {
  const { type, amount, category, description, account } = transaction;

  return (
    <TransactionItemDetailContainer>
      <TransactionItemDetailTitle>
        <Ionicons name="calendar" size={25} color="inherit" />
        <View>
          <Text variant="caption">{category.name}</Text>
          <Text variant="body">{description}</Text>
          <Text variant="body">{account.name}</Text>
        </View>
      </TransactionItemDetailTitle>
      <View>
        <Text variant={`${type === "ingreso" ? "success" : "error"}`}>
          ${amount}
        </Text>
      </View>
    </TransactionItemDetailContainer>
  );
};

export default TransactionItemDetail;
