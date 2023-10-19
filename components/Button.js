import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { COLORS } from "../lib/theme";
import { MaterialIcons } from "@expo/vector-icons";

export default function Button({ handlePress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <MaterialIcons
                name="double-arrow"
                // name="arrow-right-alt"
                size={28}
                color={COLORS.gray500}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        width: "100%",
        backgroundColor: COLORS.violet300,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: COLORS.violet400,
    },
    text: {
        color: COLORS.gray600,
        fontWeight: "bold",
    },
});
