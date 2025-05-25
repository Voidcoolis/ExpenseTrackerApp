import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    return (
        <ExpenseItem {...itemData.item}/>  /* we can also set the props manually like description={...}  */
    )
  }

function ExpensesList({ expenses }) {

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
