import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AccountProps from "../../../types/account.type";
import FlexLayout from "../../../components/display/flex.component";

const AccountSummaryContainer = styled.View`
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

const AccountSummaryTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

type AccountSummaryProps = {
  account: AccountProps;
};

const AccountSummary = ({ account }: AccountSummaryProps) => {
  const { name, description, icon, balance } = account;

  return (
    <AccountSummaryContainer>
      <AccountSummaryTitle>
        <Ionicons name="calendar" size={25} color="inherit" />
        <View>
          <Text variant="caption">{name}</Text>
          <Text variant="body">{description}</Text>
        </View>
      </AccountSummaryTitle>
      <FlexLayout>
        <Text variant="body">Saldo:</Text>
        <Text variant="body">${balance}</Text>
      </FlexLayout>
    </AccountSummaryContainer>
  );
};

export default AccountSummary;
