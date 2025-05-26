import { View } from "react-native";
import Input from "./Input";

// for the TextInput in the Add Expense screen
function ExpenseForm() {
  function amountChangeHandler(enteredAmount) {
    console.log(enteredAmount);
  }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "DD.MM.YYYY",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label="Description" textInputConfig={{
        multiline: true,
        autoCorrect: false, //default is true
        // autoCapitalize: "none", //default is 'sentences'
        onChangeText: () => {},
      }}/>
    </View>
  );
}

export default ExpenseForm;
