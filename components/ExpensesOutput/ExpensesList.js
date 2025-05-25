import { FlatList, Text } from "react-native";

function ExpensesList({ expenses }) {
  function renderExpenseItem(itemData) {
    return (
      <Text>
        {itemData.item.description} - {itemData.item.amount}€
      </Text>
    );
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
