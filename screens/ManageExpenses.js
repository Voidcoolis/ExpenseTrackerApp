import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";

function ManageExpenses({ route, navigation }) {
  //to ectract the expenseId from the route params
  const editedExpenseId = route.params?.expenseId; // optional chaining to avoid errors if expenseId is not provided
  const isEditing = !!editedExpenseId; // convert to boolean, true if editedExpenseId exists

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}
  function cancelHandler() {}
  function confirmHandler() {}

  return (
    <View style={styles.screenContainer}>
      <View style={styles.customBtns}>
        <CustomButton mode="flat" onPressBtn={cancelHandler} style={styles.custumButton}>
          Cancel
        </CustomButton>
        <CustomButton mode="flat" onPressBtn={confirmHandler} style={styles.custumButton}>
          {isEditing ? "Update" : Add}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPressBtn={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  customBtns: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  custumButton: {
    minWidth: 120,
    marginHorizontal: 12,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary400,
    alignItems: "center",
  },
});
