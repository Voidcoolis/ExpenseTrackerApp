import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { DUMMY_EXPENSES } from "../dummy-data/dummy-data";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../utilis/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)

  // to filter only the expenses from the last 7 days
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7); // Check if the expense date is within the last 7 days

    return expense.date >= sevenDaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days"/>
  );
}

export default RecentExpenses;