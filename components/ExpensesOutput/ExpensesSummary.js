import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({expenses, periodName}) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);  // 0 is a second argument to reduce, it is the initial value of sum => first expense amount
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{periodName}</Text>
      <Text style={styles.sumStyle}>{expensesSum.toFixed(2)}€</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
    text: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,
    },
    sumStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500,
    },
});
