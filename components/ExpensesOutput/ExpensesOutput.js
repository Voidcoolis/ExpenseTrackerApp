import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";


function ExpensesOutput({ expenses, expensesPeriod }) {
  //will be used in AllExpenses and RecentExpenses screens
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes all available space
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0, // no padding at the bottom to avoid extra space
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
