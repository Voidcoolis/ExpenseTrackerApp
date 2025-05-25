import { Text, View } from "react-native";

function ExpensesSummary({expenses, periodName}) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);  // 0 is a second argument to reduce, it is the initial value of sum => first expense amount
    
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>{expensesSum.toFixed(2)}€</Text>
    </View>
  );
}

export default ExpensesSummary;
