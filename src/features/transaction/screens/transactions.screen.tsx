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

const emptyTransactionObject = {
  date: "16 Oct 2024",
  amountIngreso: "900.00",
  amountGasto: "560.00",
};

const generateTransactionByDateList = (len: number) => {
  return Array.from({ length: len }, (_, key) => (
    <Spacer size="medium" key={key}>
      <TransactionItemByDate transaction={emptyTransactionObject} />
    </Spacer>
  ));
};

const Transactions = () => {
  const theme = useTheme();
  return (
    <ScrollView>
      {/* Seccion Resumen Transacciones */}
      <Container borderColor={`${theme.colors.ui.secondary}`}>
        <Text variant="h5">Saldo total</Text>
        <Text variant="h4">$700.00 mxn</Text>
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
            onPress={() => console.log("Pressed")}
          >
            Gestionar cuentas
          </Button>
        </Spacer>
      </Container>
      {/* Seccion Transacciones por fecha */}
      <Container>
        <Text variant="h5">
          <Spacer size="large" position="right">
            <Ionicons name="calendar" size={25} color="inherit" />
          </Spacer>
          Dic. 2024
        </Text>

        {generateTransactionByDateList(7).map((item) => item)}
      </Container>
    </ScrollView>
  );
};

export default Transactions;
