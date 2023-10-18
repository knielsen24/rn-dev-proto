import { View, TextInput, StyleSheet } from "react-native";

export default function SearchInput() {
    return (
        <View style={styles.container}>
            <TextInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
