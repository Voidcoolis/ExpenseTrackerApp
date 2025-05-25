import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpenses({route, navigation}) {
//to ectract the expenseId from the route params
const editedExpenseId = route.params?.expenseId; // optional chaining to avoid errors if expenseId is not provided
const isEditing = !!editedExpenseId; // convert to boolean, true if editedExpenseId exists

useLayoutEffect(() => {
  navigation.setOptions({
  title: isEditing ? "Edit Expense" : "Add Expense"
});
}, [navigation, isEditing]);

  return (
    <Text>
        Manage Expenses Screen
    </Text>
  );
}   

export default ManageExpenses;