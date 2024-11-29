import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AddBudget } from "../../features/budget/screens/add-budget.screen";
import Summary from "../../features/summary/screens/summary.screen";
import Report from "../../features/report/screens/report.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON: Record<string, keyof typeof Ionicons.glyphMap> = {
  AgregarPresupuesto: "documents",
  Resumen: "document-text",
  Informes: "stats-chart",
};

type ScreenOptionsProps = {
  route: { name: keyof typeof TAB_ICON };
};

type TabBarIconProps = {
  size: number;
  color: string;
};

const createScreenOptions = ({ route }: ScreenOptionsProps) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: TabBarIconProps) => {
      const customSize = size || 28;
      const customColor = color || "blue";
      return <Ionicons name={iconName} size={customSize} color={customColor} />;
    },
    tabBarStyle: { padding: 5 },
  };
};

const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Resumen" component={Summary} />
    <Tab.Screen name="AgregarPresupuesto" component={AddBudget} />
    <Tab.Screen name="Informes" component={Report} />
  </Tab.Navigator>
);

export default AppNavigator;
