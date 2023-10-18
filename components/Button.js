import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../lib/theme";

export default function Button({ handlePress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <MaterialIcons
                name="double-arrow"
                // name="arrow-right-alt"
                size={28}
                color={COLORS.gray500}
            />
            {/* <Text style={styles.text}>Search</Text> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: "100%",
        backgroundColor: COLORS.violet300,
        paddingHorizontal: 15,
    },
    text: {
        color: COLORS.gray600,
        fontWeight: "bold",
    },
});
