import { Text, TextInput, View } from "react-native";

// custom input component for managing expenses which will be a wrapper for the label and textInput that belongs to the label
function Input({label, textInputConfig}) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig}/>
        </View>
    );
}
export default Input;