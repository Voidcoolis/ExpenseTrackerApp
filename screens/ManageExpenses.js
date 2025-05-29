import { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ExpenseForm from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expense-context";
import { storeExpense, updateExpense, deleteExpense } from "../utilis/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpenses({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false); // for loading spinner
  const [isError, setIsError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route?.params?.expenseId;
  const isEditing = !!editedExpenseId;

  // to get the amount and description of the expense display the current values when editing
  // = displays default values - check useEffect in ExpenseForm.js
  const selectedExpense = isEditing
    ? expensesCtx.expenses.find((exp) => exp.id === editedExpenseId)
    : null;

  function cancelHandler() {
    navigation.goBack();
  }

  async function deleteHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesCtx.deleteExpense(editedExpenseId);

      navigation.goBack();
    } catch (error) {
      setIsError("An error occured while deleting the expense!");
      setIsSubmitting(false);
    }
  }

  async function submitHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setIsError("An error occured while updating/adding expense!");
      setIsSubmitting(false);
    }
  }
  
  if (isError && !isSubmitting) {
    return <ErrorOverlay message={isError} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
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
