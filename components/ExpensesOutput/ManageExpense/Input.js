import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

// Add optional `customInput` prop to replace default TextInput
function Input({ label, textInputConfig, customInput }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      {customInput ? (
        <Pressable style={styles.textInput} onPress={customInput.onPress}>
          <Text style={{ color: GlobalStyles.colors.primary700 }}>
            {customInput.displayValue}
          </Text>
        </Pressable>
      ) : (
        <TextInput style={styles.textInput} {...textInputConfig} />
      )}
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    marginBottom: 6,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
    paddingHorizontal: 6,
    paddingVertical: 8,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
  },
});
