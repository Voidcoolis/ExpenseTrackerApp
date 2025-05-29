import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ExpenseForm from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expense-context";
import { storeExpense } from "../utilis/http";

function ManageExpenses({ route }) {
  const navigation = useNavigation();
  const { expenses, addExpense, updateExpense, deleteExpense } =
    useContext(ExpensesContext);

  const isEditing = !!route?.params?.expenseId;

  // to get the amount and description of the expense display the current values when editing
  // = displays default values - check useEffect in ExpenseForm.js
  const selectedExpense = isEditing
    ? expenses.find((exp) => exp.id === route.params.expenseId)
    : null;

  function cancelHandler() {
    navigation.goBack();
  }

  function deleteHandler() {
    deleteExpense(route.params.expenseId);
    navigation.goBack();
  }

  async function submitHandler(expenseData) {
    if (isEditing) {
      updateExpense(route.params.expenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={submitHandler}
        onDelete={deleteHandler}
        isEditing={isEditing}
        defaultValues={selectedExpense}
      />
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
