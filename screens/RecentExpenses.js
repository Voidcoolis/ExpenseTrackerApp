import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../utilis/date";
import { fetchExpenses } from "../utilis/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  //GET request
  useEffect(() => {
    async function getExpenses(){
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, [])

  // to filter only the expenses from the last 7 days
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7); // Check if the expense date is within the last 7 days

    return expense.date >= sevenDaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No registered expenses for the last 7 days"
    />
  );
}

export default RecentExpenses;
