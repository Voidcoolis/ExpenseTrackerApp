import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { DUMMY_EXPENSES } from "../dummy-data/dummy-data";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallBackText="No registered expenses found!"/>
  );
}   

export default AllExpenses;