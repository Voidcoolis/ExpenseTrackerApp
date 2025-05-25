import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({expenses, expensesPeriod}) {  //will be used in AllExpenses and RecentExpenses screens
  return (
    <View>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;