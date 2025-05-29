import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../utilis/date";
import { fetchExpenses } from "../utilis/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isFetchingState, setIsFetchingState] = useState(true); // loading spinner
  const [isError, setIsError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  //GET request
  useEffect(() => {
    async function getExpenses(){
      setIsFetchingState(true);
      try {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
      } catch (error) {
        setIsError("Could not fetch expenses! ") // or massage from Backend
      }
      setIsFetchingState(false);

    }
    getExpenses();
  }, []);

  if (isError && !isFetchingState) {
    return <ErrorOverlay message={isError}/>
  }

  if (isFetchingState) {
    return(
      <LoadingOverlay />
    );
  }

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
