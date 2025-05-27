import { useEffect, useState } from "react";
import {
  View,
  Platform,
  Modal,
  Button,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { getFormattedDate } from "../../../utilis/date";
import IconButton from "../../UI/IconButton";
import { GlobalStyles } from "../../../constants/styles";

function ExpenseForm({ onCancel, onSubmit, isEditing, onDelete, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? new Date(defaultValues.date) : new Date(),
    description: defaultValues ? defaultValues.description : "",
  });

  const [inputErrors, setInputErrors] = useState({});
  const [tempDate, setTempDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    if (defaultValues) {
      setInputValues({
        amount: defaultValues.amount.toString(),
        date: new Date(defaultValues.date),
        description: defaultValues.description,
      });
      setTempDate(new Date(defaultValues.date));
    }
  }, [defaultValues]);

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((prev) => ({
      ...prev,
      [inputIdentifier]: enteredValue,
    }));
  }

  function openDatePicker() {
    setTempDate(inputValues.date);
    setShowPicker(true);
  }

  function handleTempDateChange(event, date) {
    if (date) setTempDate(date);
  }

  function confirmDateHandler() {
    setInputValues((prev) => ({ ...prev, date: tempDate }));
    setShowPicker(false);
  }

  function cancelDateHandler() {
    setTempDate(inputValues.date);
    setShowPicker(false);
  }

  // Allows values like 12.99 or 12,99 to be parsed correctly
  function submitHandler() {
    const normalizedAmount = inputValues.amount.replace(",", ".");
    const amountNumber = parseFloat(normalizedAmount);

    const errors = {};
    if (!normalizedAmount || isNaN(amountNumber) || amountNumber <= 0) {
      errors.amount = "Enter a valid amount greater than 0.";
    }

    if (!inputValues.description.trim()) {
      errors.description = "Description cannot be empty.";
    }

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
      Alert.alert("Invalid input", "Please correct the highlighted fields.");
      return;
    }

    const expenseData = {
      amount: amountNumber,  // amount : +inputValues.amount,
      date: inputValues.date,
      description: inputValues.description.trim(),
    };

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>
        {isEditing ? "Edit Expense" : "Add Expense"}
      </Text>

      <View style={styles.row}>
        <View style={styles.flexItem}>
          <Input
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"), // onChangeText: (val) => inputChangeHandler("amount", val),
              value: inputValues.amount,
            }}
            suffix="€"
            error={inputErrors.amount}
          />
        </View>

        <View style={styles.flexItem}>
          <Input
            label="Date"
            customInput={{
              onPress: openDatePicker,
              displayValue: getFormattedDate(inputValues.date),
            }}
          />
        </View>
      </View>

      {showPicker && Platform.OS === "android" && (
        <DateTimePicker
          value={tempDate}
          mode="date"
          display="calendar"
          onChange={handleTempDateChange}
        />
      )}

      {Platform.OS === "ios" && (
        <Modal visible={showPicker} transparent animationType="slide">
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <DateTimePicker
                value={tempDate}
                mode="date"
                display="spinner"
                onChange={handleTempDateChange}
                style={{ backgroundColor: "white" }}
              />
              <View style={styles.buttonRow}>
                <Button title="Cancel" onPress={cancelDateHandler} />
                <Button title="Confirm" onPress={confirmDateHandler} />
              </View>
            </View>
          </View>
        </Modal>
      )}

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "description"),  // onChangeText: (val) => inputChangeHandler("description", val),
          value: inputValues.description,
        }}
        error={inputErrors.description}
      />

      <View style={styles.actions}>
        <Button title="Cancel" onPress={onCancel} color={GlobalStyles.colors.gray500} />
        <Button title={isEditing ? "Update" : "Add"} onPress={submitHandler} />
        {isEditing && (
          <IconButton icon="trash-outline" size={28} color={GlobalStyles.colors.error500} onPressBtn={onDelete}/>
        )}
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "American Typewriter",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  actions: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "snow",
    borderRadius: 12,
    marginHorizontal: 10,
  },
});
