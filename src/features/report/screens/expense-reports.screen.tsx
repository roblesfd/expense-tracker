import React from "react";
import Container from "../../../components/container/container.component";
import { Text } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import CustomPieChart from "../../../components/chart/pie-chart.component";
import {
  barChartData,
  mockCategoryListForChart,
  mockCuentaListForChart,
  monthsAbbreviated,
} from "../../../utils/mockData";
import { ScrollView } from "react-native";
import {
  curry,
  extractAttributeValue,
  formatToCurrency,
  genMonthWithYearList,
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
              innerCircleValue={formatToCurrency(totalAmountIncomes)}
              data={filteredExpenses}
            />
          </Spacer>
          <Spacer size="extraLarge" />
          <Spacer size="large">
            <CustomPieChart
              title="Gastos por cuenta"
              innerCircleValue={formatToCurrency(totalAmountAccounts)}
              data={mockCuentaListForChart}
            />
          </Spacer>
        </Container>
        {/* Resumen por Meses */}
        <Container borderColor={theme.colors.ui.primary}>
          <CustomBarChart title="Gastos por meses" data={barChartData} />
          {genMonthWithYearList(monthsAbbreviated, 2024).map((monthYear) => (
            <Spacer size="medium">
              <FlexLayout>
                <Text variant="bodyMedium">{monthYear}</Text>
                <Text
                  style={{
                    color: theme.colors.ui.success,
                    fontWeight: "semibold",
                  }}
                >
                  $5,000
                </Text>
              </FlexLayout>
              <HorizontalSeparator thickness={1} />
            </Spacer>
          ))}
        </Container>
      </ScrollView>
    </Spacer>
  );
};

export default ReportExpenses;
