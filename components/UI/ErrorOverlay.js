import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({message}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.textBtn, styles.title]}>An error occured!</Text>
            <Text style={styles.textBtn}>{message}</Text>
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    textBtn: {
        textAlign: "center",
        marginBottom: 8,
        color: "white"
    },
    title: {
      fontSize: 20,
      fontWeight: "bold"
    },
})