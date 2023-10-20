import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../lib/theme";

export default function ErrorMessage({ error }) {
    return (
        <View style={styles.errorContainer}>
            <MaterialIcons name="error-outline" size={24} color={COLORS.red} />
            <Text style={styles.errorText}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        fontSize: 18,
        color: COLORS.red,
        marginLeft: 5,
    },
});
