import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../lib/theme";

export default function ImageCard({ imageURL }) {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: imageURL }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Test</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: COLORS.white,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.violet700,
    },
});
