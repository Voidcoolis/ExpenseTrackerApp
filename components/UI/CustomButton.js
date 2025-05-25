import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function CustomButton({ children, onPressBtn, mode, style }) {
  return (
    <View style={[styles.buttonWrapper, style]}>
      <Pressable
        onPress={onPressBtn}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressedStyle,
        ]}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text
            style={[
              styles.buttonText,
              mode === "flat" && styles.flatText,
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: GlobalStyles.colors.accent50,
    padding: 4,
    borderRadius: 12,
    marginVertical: 6,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  pressable: {
    borderRadius: 4,
    overflow: "hidden",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: GlobalStyles.colors.primary500,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  flat: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowOpacity: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  flatText: {
    color: "white",
  },
  pressedStyle: {
    opacity: 0.85,
  },
});
