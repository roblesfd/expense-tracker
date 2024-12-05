import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import IncomeCategories from "./income-categories.screen";
import ExpenseCategories from "./expense-categories.screen";

const renderScene = SceneMap({
  incomecategories: IncomeCategories,
  expensecategories: ExpenseCategories,
});

const routes = [
  { key: "incomecategories", title: "Ingresos" },
  { key: "expensecategories", title: "Gastos" },
];

const Category = () => {
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

export default Category;
