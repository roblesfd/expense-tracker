import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Transactions from "../../features/transaction/screens/transactions.screen";
import Report from "../../features/report/screens/report.screen";
import CustomModalProvider from "../../components/modal/modal.context";
import Categories from "../../features/category/screens/categories.screen";
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from "../../features/account/screens/account.screen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TAB_ICON: Record<string, keyof typeof Ionicons.glyphMap> = {
  Transacciones: "cash-sharp",
  Informes: "stats-chart",
  Categorias: "grid",
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

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Transacciones" component={Transactions} />
      <Tab.Screen name="Informes" component={Report} />
      <Tab.Screen name="Categorias" component={Categories} />
    </Tab.Navigator>
  );
}

const AppNavigator = () => (
  <CustomModalProvider>
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Cuentas" component={Accounts} />
    </Stack.Navigator>
  </CustomModalProvider>
);

export default AppNavigator;
