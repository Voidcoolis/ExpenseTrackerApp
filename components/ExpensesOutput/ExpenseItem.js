import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utilis/date";

function ExpenseItem({ description, amount, date = new Date() }) {
  function expensePressHandler() {
    // Handle the press event, e.g., navigate to a detail screen
    console.log("Expense item pressed:", description);
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressedStyle}
      android_ripple={{ color: "#ccc" }}
    >
      <View style={styles.expenseItemStyle}>
        {/* Left section: description and date */}
        <View style={styles.textContainer}>
          <Text style={[styles.textBase, styles.textDescription]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>

        {/* Right section: amount */}
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount.toFixed(2)}€</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.75,
  },
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
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  textBase: {
    color: GlobalStyles.colors.primary500,
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
    minWidth: 80,
  },
  amountText: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
