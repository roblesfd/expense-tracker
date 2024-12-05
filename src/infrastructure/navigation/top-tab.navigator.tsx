import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import ReportIncomes from "../../features/report/screens/report-incomes.screen";
import ReportExpenses from "../../features/report/screens/report-expenses.screen";

const renderScene = SceneMap({
  reportincomes: ReportIncomes,
  reportexpenses: ReportExpenses,
});

const routes = [
  { key: "reportincomes", title: "Ingresos" },
  { key: "reportexpenses", title: "Gastos" },
];

export default function TopTabNavigator() {
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
}
