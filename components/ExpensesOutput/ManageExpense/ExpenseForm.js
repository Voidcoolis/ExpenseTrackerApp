import { useState } from "react";
import {
  View,
  Platform,
  Modal,
  Button,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { getFormattedDate } from "../../../utilis/date";

function ExpenseForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState(new Date());

  function openDatePicker() {
    setTempDate(selectedDate); // start from current value
    setShowPicker(true);
  }

  function handleTempDateChange(event, date) {
    if (date) setTempDate(date);
  }

  function confirmDateHandler() {
    setSelectedDate(tempDate);
    setShowPicker(false);
  }

  function cancelDateHandler() {
    setTempDate(selectedDate); // reset temp
    setShowPicker(false);
  }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: () => {},
        }}
      />

      <Input
        label="Date"
        customInput={{
          onPress: openDatePicker,
          displayValue: getFormattedDate(selectedDate),
        }}
      />

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

      {Platform.OS === "android" && showPicker && (
        <View style={styles.buttonRow}>
          <Button title="Cancel" onPress={cancelDateHandler} />
          <Button title="Confirm" onPress={confirmDateHandler} />
        </View>
      )}

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
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
