import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import Container from "../../../components/container/container.component";
import { TransactionItem } from "../components/transaction-summary.component";
import { Button } from "react-native-paper";
import { TransactionItemByDate } from "../components/transaction-by-date.component";
import { useTheme } from "styled-components";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FlexLayout from "../../../components/display/flex.component";
import Dropdown from "../../../components/dropdown/dropdown.component";
import TransactionItemDetail from "../components/transaction-item-detail.component";
import {
  transactionByDateList,
  transactionSummaryList,
} from "../../../utils/mockData";
import { useNavigation } from "@react-navigation/native";
import TotalBalance from "../components/transaction-balance.component";

const generateTransactionByDateList = (dropdownList: any[]) => {
  return dropdownList.map((dropdown, key) => (
    <Spacer size="medium" key={key}>
      <Dropdown
        items={dropdown}
        placeholder="Select an option"
        width="100%"
        childrenHeader={(isOpen, setIsOpen) => (
          <TransactionItemByDate
            transactionByDay={dropdown}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      >
        {dropdown.transactionList.map((transaction: any, key: any) => (
          <TransactionItemDetail key={key} transaction={transaction} />
        ))}
      </Dropdown>
    </Spacer>
  ));
};

const generateTransactionSummaryList = (list: any[]) => {
  return list.map((item, key) => (
    <Spacer key={key} size="small">
      <TransactionItem
        icon={item.icon as keyof typeof Ionicons.glyphMap}
        variant={item.variant as string}
        title={item.title}
        amount={item.amount}
        transactionType={item.transactionType}
      />
    </Spacer>
  ));
};

const Transactions = ({ route }: { route: any }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView>
      {/* Seccion Resumen Transacciones */}
      <Container borderColor={`${theme.colors.ui.secondary}`}>
        <TotalBalance total={450} />
        <Container borderColor={`${theme.colors.ui.secondary}`}>
          {generateTransactionSummaryList(transactionSummaryList)}
        </Container>
      </Container>
      <Container>
        <Spacer size="medium">
          <Button
            icon="cash"
            mode="contained"
            onPress={() => navigation.navigate("Cuentas" as never)}
          >
            Gestionar cuentas
          </Button>
        </Spacer>
      </Container>
      {/* Seccion Transacciones por fecha */}
      <Container>
        <FlexLayout justifyContent="start">
          <Spacer size="large" position="right">
            <Ionicons name="calendar" size={25} color="inherit" />
          </Spacer>
          <Text variant="h5">Dic. 2024</Text>
        </FlexLayout>
        <Spacer size="medium" position="bottom" />
        {generateTransactionByDateList(transactionByDateList)}
      </Container>
    </ScrollView>
  );
};

export default Transactions;
