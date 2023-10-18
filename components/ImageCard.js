import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../lib/theme";

export default function ImageCard({
    imageURL,
    views,
    likes,
    downloads,
    navigation,
}) {
    const handlePress = () => {
        navigation.navigate("Overlay", {
            imageURL,
        });
    };

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={handlePress}
        >
            <Image source={{ uri: imageURL }} style={styles.image} />
            <View style={styles.detailsContainer}>
                {/* <Text style={styles.captionText}>Views: {views}</Text> */}
                <View style={styles.captionContainer}>
                    <MaterialIcons
                        name="thumb-up-off-alt"
                        size={24}
                        color={COLORS.gray500}
                    />
                    <Text style={styles.captionText}> {likes}</Text>
                </View>
                <View style={styles.captionContainer}>
                    <MaterialIcons
                        name="arrow-circle-down"
                        size={24}
                        color={COLORS.gray500}
                    />
                    <Text style={styles.captionText}>{downloads}</Text>
                </View>
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
    captionContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    captionText: {
        fontSize: 16,
        color: COLORS.gray600,
        marginLeft: 5,
    },
});
