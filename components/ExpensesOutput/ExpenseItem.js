import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ description, amount, date }) {
  const expense = {
    description: description || "No description provided",
    amount: amount || 0,
    date: date || new Date(),
  };

  return (
    <Pressable>
      <View style={styles.expenseItemStyle}>
        <Text style={[styles.textBase, styles.textDescription]}>
          {expense.description}
        </Text>
        <Text style={styles.textBase}>{expense.date.toLocaleDateString()}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{expense.amount}€</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItemStyle: {
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  textDescription: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amountText: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
