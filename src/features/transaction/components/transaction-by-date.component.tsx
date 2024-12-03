import styled, { useTheme } from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";

const TransactionItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-horizontal: 10px;
  padding-vertical: 15px;
`;

const TransactionItemTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

type TransactionItemProps = {
  transaction: {
    date: string;
    amountIngreso: string;
    amountGasto: string;
  };
};

export const TransactionItemByDate = ({
  transaction,
}: TransactionItemProps) => {
  const { date, amountIngreso, amountGasto } = transaction;
  return (
    <TransactionItemContainer>
      <TransactionItemTitle>
        <Text variant="h5">02</Text>
        <View>
          <Text variant="caption">Lunes</Text>
          <Text variant="body">Dic. 2024</Text>
        </View>
      </TransactionItemTitle>
      <View>
        <Text variant="success">$500.00</Text>
        <Text variant="error">$500.00</Text>
      </View>
    </TransactionItemContainer>
  );
};
