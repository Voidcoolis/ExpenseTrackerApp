import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPressBtn }) {
  return (
    <Pressable
      onPress={onPressBtn}
      style={({ pressedBtn }) => pressedBtn && styles.pressedBtn}
    >
      <View style={styles.btnContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    // justifyContent: "center",
    // alignItems: "center",
    // elevation: 2,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3,
  },
  pressedBtn: {
    opacity: 0.75,
  },
});
