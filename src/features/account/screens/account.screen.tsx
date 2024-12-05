import React from "react";
import { ScrollView } from "react-native";
import TotalBalance from "../../transaction/components/transaction-balance.component";
import Container from "../../../components/container/container.component";
import { useTheme } from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import Dropdown from "../../../components/dropdown/dropdown.component";
import AccountSummary from "../components/account-summary.component";
import {
  accountBancoSummary,
  accountBilleteraSummary,
} from "../../../utils/mockData";

const Accounts = () => {
  const theme = useTheme();
  return (
    <ScrollView>
      <Container borderColor={`${theme.colors.ui.secondary}`}>
        <TotalBalance total={450} />
      </Container>
      <AccountSummary account={accountBilleteraSummary} />
      <AccountSummary account={accountBancoSummary} />
    </ScrollView>
  );
};

export default Accounts;
