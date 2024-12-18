import { Text } from "react-native";
import AccountProps from "../types/account.type";
import CategoryProps from "../types/category.type";
import TransactionProps from "../types/transaction.type";

const emptyTransactionObject: TransactionProps = {
  type: "ingreso",
  amount: 258.0,
  date: "16 Oct 2024",
  category: {
    name: "Salario",
    icon: "eye",
    transactionType: "ingreso",
    color: "green",
  },
  description: "Descripcion de transaccion",
  account: {
    name: "billetera",
    description: "Descripcion cuenta",
    icon: "calendar",
    balance: 700,
  },
};

const transactionByDateList = [
  {
    noDay: 10,
    dayofWeek: "Lunes",
    shortDate: "Nov. 2024",
    totalAmountExpenses: 900,
    totalAmountIncomes: 500,
    transactionList: [
      emptyTransactionObject,
      emptyTransactionObject,
      emptyTransactionObject,
      emptyTransactionObject,
    ],
  },
  {
    noDay: 11,
    dayofWeek: "Martes",
    shortDate: "Nov. 2024",
    totalAmountExpenses: 900,
    totalAmountIncomes: 500,
    transactionList: [
      emptyTransactionObject,
      emptyTransactionObject,
      emptyTransactionObject,
      emptyTransactionObject,
    ],
  },
];

const mockCategoryObject: CategoryProps = {
  name: "Alimentos",
  icon: "fast-food",
  transactionType: "gasto",
  color: "orange",
};

const mockCategoryList = [
  {
    name: "Alimentos",
    icon: "fast-food",
    transactionType: "gasto",
    color: "orange",
  },
  {
    name: "Facturas",
    icon: "document-text-sharp",
    transactionType: "gasto",
    color: "purple",
  },
  {
    name: "Transporte",
    icon: "bus-sharp",
    transactionType: "gasto",
    color: "blue",
  },
  {
    name: "Salario",
    icon: "cash-sharp",
    transactionType: "ingreso",
    color: "lime",
  },
  {
    name: "Inversiones",
    icon: "briefcase",
    transactionType: "ingreso",
    color: "pink",
  },
  {
    name: "Renta",
    icon: "home",
    transactionType: "ingreso",
    color: "turquoise",
  },
];

const mockCategoryListForChart = [
  {
    value: 100,
    color: "orange",
    text: "Alimentos",
    transactionType: "gasto",
  },
  {
    value: 100,
    color: "purple",
    text: "Facturas",
    transactionType: "gasto",
  },
  {
    value: 100,
    color: "blue",
    text: "Transporte",
    transactionType: "gasto",
  },
  {
    value: 100,
    color: "lime",
    text: "Salario",
    transactionType: "ingreso",
  },
  {
    value: 100,
    color: "pink",
    text: "Inversiones",
    transactionType: "ingreso",
  },
  {
    value: 100,
    color: "turquoise",
    text: "Renta",
    transactionType: "ingreso",
  },
];

const mockCuentaListForChart = [
  {
    value: 150,
    color: "violet",
    text: "Billetera",
    transactionType: "ingreso",
  },
  {
    value: 300,
    color: "red",
    text: "Mi banco",
    transactionType: "ingreso",
  },
];

const transactionSummaryList = [
  {
    icon: "arrow-up",
    variant: "success",
    title: "Ingresos",
    amount: "$100.00",
    transactionType: "ingreso",
  },
  {
    icon: "arrow-down",
    variant: "error",
    title: "Gastos",
    amount: "$50.00",
    transactionType: "gasto",
  },
  {
    icon: "analytics",
    title: "Balance",
    amount: "$50.00",
    transactionType: "balance",
  },
];

const barChartData = [
  {
    value: 15,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Ene</Text>,
  },
  {
    value: 30,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Ene</Text>,
  },
  {
    value: 26,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Feb</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Mar</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Abr</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>May</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Jun</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Jul</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Ago</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Sep</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Oct</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Nov</Text>,
  },
  {
    value: 40,
    frontColor: "green",
    labelComponent: () => <Text style={{ fontSize: 9 }}>Dic</Text>,
  },
];

const monthsAbbreviated = [
  "Ene.",
  "Feb.",
  "Mar.",
  "Abr.",
  "May.",
  "Jun.",
  "Jul.",
  "Ago.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dic.",
];

const accountBilleteraSummary: AccountProps = {
  name: "billetera",
  description: "Descripcion de la cuenta de billetera",
  icon: "calendar",
  balance: 780,
};

const accountBancoSummary: AccountProps = {
  name: "mi banco",
  description: "Descripcion de la cuenta de banco",
  icon: "calendar",
  balance: 1500,
};

export {
  emptyTransactionObject,
  transactionByDateList,
  mockCategoryObject,
  mockCategoryList,
  mockCategoryListForChart,
  transactionSummaryList,
  barChartData,
  mockCuentaListForChart,
  monthsAbbreviated,
  accountBilleteraSummary,
  accountBancoSummary,
};
