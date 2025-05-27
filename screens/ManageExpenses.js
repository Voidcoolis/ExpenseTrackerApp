import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ExpenseForm from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expense-context";

function ManageExpenses({ route }) {
  const navigation = useNavigation();
  const { addExpense, updateExpense, deleteExpense } = useContext(ExpensesContext);

  const isEditing = !!route?.params?.expenseId;

  function cancelHandler() {
    navigation.goBack();
  }

  function deleteHandler() {
    deleteExpense(route.params.expenseId);
    navigation.goBack();
  }

  function submitHandler(expenseData) {
    if (isEditing) {
      updateExpense(route.params.expenseId, expenseData);
    } else {
      addExpense(expenseData);
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
