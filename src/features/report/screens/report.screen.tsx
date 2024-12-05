import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import ReportIncomes from "./report-incomes.screen";
import ReportExpenses from "./report-expenses.screen";

const renderScene = SceneMap({
  reportincomes: ReportIncomes,
  reportexpenses: ReportExpenses,
});

const routes = [
  { key: "reportincomes", title: "Ingresos" },
  { key: "reportexpenses", title: "Gastos" },
];

const Report = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default Report;

/*
  Estructura
  - TabNav Ingreo & Cuenta
  - Ingresos/Gastos por categoria
  - Ingresos/Gastos por cuenta
  - Ingresos/Gastos por meses
*/
