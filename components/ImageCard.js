import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../lib/theme";

/**
 * TODO: add icons for views, likes, and downloads
 */

export default function ImageCard({ imageURL, views, likes, downloads, handlePress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Image source={{ uri: imageURL }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{views}</Text>
                <Text style={styles.title}>{likes}</Text>
                <Text style={styles.title}>{downloads}</Text>
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 14,
        // fontWeight: "bold",
        color: COLORS.gray600,
    },
});
