import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

//expenses summary
function ExpensesOutput({expenses}) {
  return (
    <View>
        <ExpensesSummary />
        <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;