import TransactionProps from "./transaction.type";

type UserProps = {
  username: string;
  email: string;
  password: string;
  balance: number;
  incomes: TransactionProps[];
  expenses: TransactionProps[];
};

export default UserProps;
