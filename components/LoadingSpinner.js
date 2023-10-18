import { ActivityIndicator, View, StyleSheet } from "react-native";
import { COLORS } from "../lib/theme";

export default function LoadingSpinner() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.violet500} />
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
