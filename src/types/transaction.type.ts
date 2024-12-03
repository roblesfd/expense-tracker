import AccountProps from "./account.type";
import CategoryProps from "./category.type";

type TransactionProps = {
  type: "ingreso" | "gasto";
  amount: number;
  date: string;
  category: CategoryProps;
  description: string;
  account: AccountProps;
};

export default TransactionProps;
