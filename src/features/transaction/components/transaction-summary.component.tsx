import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import Ionicons from "@expo/vector-icons/Ionicons";

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
  variant:
    | "body"
    | "label"
    | "caption"
    | "error"
    | "success"
    | "hint"
    | "h5"
    | "h4"
    | "h3";
  title: string;
  amount: string;
};

export const TransactionItem = ({
  icon,
  variant,
  title,
  amount,
}: TransactionItemProps) => {
  return (
    <TransactionItemContainer>
      <TransactionItemTitle>
        <Ionicons name={icon} size={25} color={`theme.colors.ui.${variant}`} />
        <Text variant="body">{title}</Text>
      </TransactionItemTitle>
      <Text variant={variant}>{amount}</Text>
    </TransactionItemContainer>
  );
};
