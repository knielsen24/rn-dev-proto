import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../lib/theme";

export default function ToTopButton({ handlePress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <MaterialIcons
                name="arrow-drop-up"
                size={45}
                // color="rgba(249, 250, 251, 0.2)"
                color={COLORS.gray100}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "rgba(196, 181, 253, 0.8)",
        // backgroundColor: COLORS.violet300,
        borderRadius: 50,
    },
});
