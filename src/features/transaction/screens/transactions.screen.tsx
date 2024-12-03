import React, { useState } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import Container from "../../../components/container/container.component";
import { TransactionItem } from "../components/transaction-summary.component";
import { Button, IconButton } from "react-native-paper";
import { TransactionItemByDate } from "../components/transaction-by-date.component";
import { useTheme } from "styled-components";
import { ScrollView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FlexLayout from "../../../components/display/flex.component";
import Dropdown from "../../../components/dropdown/dropdown.component";
import TransactionItemDetail from "../components/transaction-item-detail.component";
import {
  emptyTransactionObject,
  transactionByDateList,
} from "../../../utils/mockData";
import { useNavigation } from "@react-navigation/native";

const generateTransactionByDateList = (dropdownList: any[]) => {
  return dropdownList.map((dropdown, key) => (
    <Spacer size="medium">
      <Dropdown
        items={dropdown}
        placeholder="Select an option"
        width="100%"
        childrenHeader={<TransactionItemByDate transactionByDay={dropdown} />}
      >
        {dropdown.transactionList.map((transaction: any) => (
          <TransactionItemDetail transaction={transaction} />
        ))}
        <TransactionItemDetail transaction={emptyTransactionObject} />
      </Dropdown>
    </Spacer>
  ));
};

const Transactions = () => {
  const theme = useTheme();
  const [totalBalanceVisible, setTotalBalanceVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView>
      {/* Seccion Resumen Transacciones */}
      <Container borderColor={`${theme.colors.ui.secondary}`}>
        <FlexLayout justifyContent="space-between" alignItems="center">
          <View style={{ flex: 1 }}>
            <Text variant="h5">Saldo total</Text>
            <Text variant="h4">
              {totalBalanceVisible ? "$700.00 mxn" : "$*******"}
            </Text>
          </View>
          <IconButton
            icon={totalBalanceVisible ? "eye" : "eye-off"}
            iconColor={theme.colors.brand.primary}
            size={25}
            onPress={() => setTotalBalanceVisible(!totalBalanceVisible)}
          />
        </FlexLayout>

        <Container borderColor={`${theme.colors.ui.secondary}`}>
          <Spacer size="small">
            <TransactionItem
              icon="arrow-up"
              variant="success"
              title="Ingresos"
              amount="100.00"
            />
          </Spacer>
          <Spacer size="small">
            <TransactionItem
              icon="arrow-down"
              variant="error"
              title="Gastos"
              amount="50.00"
            />
          </Spacer>
          <Spacer size="small">
            <TransactionItem
              icon="analytics"
              variant="body"
              title="Balance"
              amount="+50.00"
            />
          </Spacer>
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
