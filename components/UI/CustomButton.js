// CustomButton.js
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons"; // or "react-native-vector-icons/Ionicons"

function CustomButton({ children, onPressBtn, mode, style, icon }) {
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
          {icon && (
            <Ionicons
              name={icon}
              size={18}
              color="white"
              style={styles.icon}
            />
          )}
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
    borderRadius: 20,
    marginVertical: 6,
    elevation: 3,
  },
  pressable: {
    borderRadius: 20,
    overflow: "hidden",
  },
  button: {
    flexDirection: "row",
    gap: 8,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: GlobalStyles.colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
  flat: {
    backgroundColor: "transparent",
    elevation: 0,
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
  icon: {
    marginRight: 6,
  },
});
