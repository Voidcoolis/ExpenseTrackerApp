import { useState } from "react";
import {
  View,
  Platform,
  Modal,
  Button,
  StyleSheet,
  Text,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { getFormattedDate } from "../../../utilis/date";

function ExpenseForm() {
    //another option instead of using multiple useState hooks is to use a single useState hook with an object
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: new Date(),
    description: "",
  });

  const [tempDate, setTempDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

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

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>

      <View style={styles.row}>
        <View style={styles.flexItem}>
          <Input
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"), // or : onChangeText: (val) => inputChangeHandler("amount", val),
              value: inputValues.amount,
            }}
            suffix="€"
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

      {/* Android Picker */}
      {showPicker && Platform.OS === "android" && (
        <DateTimePicker
          value={tempDate}
          mode="date"
          display="calendar"
          onChange={handleTempDateChange}
        />
      )}

      {/* iOS Picker Modal */}
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
          onChangeText: inputChangeHandler.bind(this, "description"), // (val) => inputChangeHandler("description", val)
          value: inputValues.description,
        }}
      />
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
});
