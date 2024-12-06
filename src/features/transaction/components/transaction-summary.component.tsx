import styled, { useTheme } from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native-paper";

const TransactionItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
`;

const TransactionItemTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

type TransactionItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  variant: string;
  title: string;
  amount: string;
  transactionType: string;
};

export const TransactionItem = ({
  icon,
  variant,
  title,
  amount,
  transactionType,
}: TransactionItemProps) => {
  const theme = useTheme();
  return (
    <TransactionItemContainer>
      <TransactionItemTitle>
        <Ionicons name={icon} size={25} color={theme.colors.ui[variant]} />
        <Text>{title}</Text>
      </TransactionItemTitle>
      <Text style={{ color: theme.colors.ui[variant] }}>{amount}</Text>
    </TransactionItemContainer>
  );
};
