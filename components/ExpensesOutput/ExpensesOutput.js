import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";


function ExpensesOutput({ expenses, expensesPeriod, fallBackText }) {
  //will be used in AllExpenses and RecentExpenses screens

  // if expenses is empty, we will show a fallback text
  let content = <Text style={styles.infoText}>{fallBackText}</Text>
  
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
