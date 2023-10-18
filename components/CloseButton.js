import { TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../lib/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CloseButton({ handlePress }) {
    return (
        <TouchableOpacity style={styles.closeButton} onPress={handlePress}>
            <MaterialCommunityIcons
                name="close-circle-outline"
                size={40}
                color={COLORS.gray500}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    closeButton: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
    },
});
