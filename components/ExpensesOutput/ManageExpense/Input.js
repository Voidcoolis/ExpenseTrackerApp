import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function Input({ label, textInputConfig, customInput, suffix }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>

      {customInput ? (
        <Pressable style={[styles.inputBox]} onPress={customInput.onPress}>
          <Text style={styles.inputText}>{customInput.displayValue}</Text>
        </Pressable>
      ) : (
        <View style={[styles.inputBox, styles.inputWithSuffix]}>
          <TextInput
            style={[styles.textInput, { flex: 1, paddingRight: suffix ? 0 : 6 }]}
            {...textInputConfig}
          />
          {suffix && <Text style={styles.suffix}>{suffix}</Text>}
        </View>
      )}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    marginBottom: 6,
  },
  inputBox: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  inputWithSuffix: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputText: {
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  suffix: {
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
    marginLeft: 4,
  },
});
