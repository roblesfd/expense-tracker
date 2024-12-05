import React from "react";
import Container from "../../../components/container/container.component";
import { Text } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import CustomPieChart from "../../../components/chart/pie-chart.component";
import {
  barChartData,
  mockCategoryListForChart,
  mockCuentaListForChart,
} from "../../../utils/mockData";
import { ScrollView } from "react-native";
import {
  curry,
  extractAttributeValue,
  pipeline,
} from "../../../utils/data-functions";
import { sumTotal } from "../../../utils/math";
import { useTheme } from "styled-components/native";
import CustomBarChart from "../../../components/chart/bar-chart.component";
import FlexLayout from "../../../components/display/flex.component";
import HorizontalSeparator from "../../../components/separator/separator.component";

const ReportExpenses = () => {
  const theme = useTheme();
  const filteredExpenses = mockCategoryListForChart.filter(
    (item) => item.transactionType === "gasto"
  );
  const getAccountsValues = curry(extractAttributeValue)("value");
  const totalAmountAccounts = pipeline(
    getAccountsValues,
    sumTotal
  )(mockCuentaListForChart);
  const getIncomesValues = curry(extractAttributeValue)("value");
  const totalAmountIncomes = pipeline(
    getIncomesValues,
    sumTotal
  )(filteredExpenses);

  return (
    <Spacer size="2xl" position="bottom">
      <ScrollView>
        {/* Resumen por  Categoria y Cuenta*/}
        <Container borderColor={theme.colors.ui.primary}>
          <Spacer size="large">
            <CustomPieChart
              title="Gastos por categoría"
              innerCircleValue={totalAmountIncomes.toString()}
              data={filteredExpenses}
            />
          </Spacer>
          <Spacer size="extraLarge" />
          <Spacer size="large">
            <CustomPieChart
              title="Gastos por cuenta"
              innerCircleValue={totalAmountAccounts.toString()}
              data={mockCuentaListForChart}
            />
          </Spacer>
        </Container>
        {/* Resumen por Meses */}
        <Container borderColor={theme.colors.ui.primary}>
          <CustomBarChart title="Gastos por meses" data={barChartData} />
          <Spacer size="medium">
            <FlexLayout>
              <Text variant="bodyMedium">Ene. 2024</Text>
              <Text>$5,000</Text>
            </FlexLayout>
            <HorizontalSeparator thickness={1} />
          </Spacer>
          <Spacer size="medium">
            <FlexLayout>
              <Text variant="bodyMedium">Feb. 2024</Text>
              <Text>$5,000</Text>
            </FlexLayout>
            <HorizontalSeparator thickness={1} />
          </Spacer>
          <Spacer size="medium">
            <FlexLayout>
              <Text variant="bodyMedium">Mar. 2024</Text>
              <Text>$5,000</Text>
            </FlexLayout>
            <HorizontalSeparator thickness={1} />
          </Spacer>
          <Spacer size="medium">
            <FlexLayout>
              <Text variant="bodyMedium">Abr. 2024</Text>
              <Text>$5,000</Text>
            </FlexLayout>
          </Spacer>
        </Container>
      </ScrollView>
    </Spacer>
  );
};

export default ReportExpenses;
