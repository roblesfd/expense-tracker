import TransactionProps from "../types/transaction.type";

const emptyTransactionObject: TransactionProps = {
  type: "ingreso",
  amount: 258.0,
  date: "16 Oct 2024",
  category: {
    name: "Salario",
    icon: "eye",
    transactionType: "ingreso",
  },
  description: "Descripcion de transaccion",
  account: {
    name: "billetera",
    description: "Descripcion cuenta",
    icon: "calendar",
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

export { emptyTransactionObject, transactionByDateList };
