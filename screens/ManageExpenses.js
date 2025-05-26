import { useContext, useLayoutEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ExpensesOutput/ManageExpense/ExpenseForm";

function ManageExpenses({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
      headerBackTitleVisible: false,
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Test!!!",
        amount: 112.99,
        date: new Date("2025-05-24"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2025-05-23"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.screenContainer}>
      <ExpenseForm />
      <View style={styles.buttonsCard}>
        <CustomButton
          mode="flat"
          onPressBtn={cancelHandler}
          style={styles.button}
          icon="close"
        >
          Cancel
        </CustomButton>
        <CustomButton
          mode="flat"
          onPressBtn={confirmHandler}
          style={styles.button}
          icon={isEditing ? "create" : "add"}
        >
          {isEditing ? "Update" : "Add"}
        </CustomButton>

        {isEditing && (
          <IconButton
            icon="trash-outline"
            color={GlobalStyles.colors.error500}
            size={30}
            onPressBtn={deleteExpenseHandler}
            style={styles.trashIcon}
          />
        )}
      </View>
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary100,
    justifyContent: "flex-start",
  },
  buttonsCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
  trashIcon: {
    marginLeft: 8,
  },
});
