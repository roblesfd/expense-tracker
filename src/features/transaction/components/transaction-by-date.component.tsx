import styled, { useTheme } from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";
import TransactionProps from "../../../types/transaction.type";
import { IconButton } from "react-native-paper";

const TransactionItemContainer = styled.View`
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

const TransactionItemTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

type TransactionItemProps = {
  transactionByDay: {
    noDay: number;
    dayofWeek: string;
    shortDate: string;
    totalAmountExpenses: number;
    totalAmountIncomes: number;
  };
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export const TransactionItemByDate = ({
  transactionByDay,
  isOpen,
  setIsOpen,
}: TransactionItemProps) => {
  const {
    noDay,
    dayofWeek,
    shortDate,
    totalAmountExpenses,
    totalAmountIncomes,
  } = transactionByDay;
  const theme = useTheme();
  return (
    <TransactionItemContainer>
      <TransactionItemTitle>
        <Text variant="h5">{noDay}</Text>
        <View>
          <Text variant="caption">{dayofWeek}</Text>
          <Text variant="body">{shortDate}</Text>
        </View>
      </TransactionItemTitle>
      <View>
        <Text variant="success">${totalAmountIncomes}</Text>
        <Text variant="error">${totalAmountExpenses}</Text>
      </View>
      <IconButton
        icon={isOpen ? "arrow-up-drop-circle" : "arrow-down-drop-circle"}
        iconColor={theme.colors.brand.primary}
        size={25}
        onPress={() => setIsOpen(!isOpen)}
      />
    </TransactionItemContainer>
  );
};
