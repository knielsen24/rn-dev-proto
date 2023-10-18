import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../lib/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Overlay({ navigation, route }) {
    const URL = route.params.imageURL;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: URL }}
                style={styles.image}
                resizeMode="contain"
            />
            <TouchableOpacity
                style={styles.closeButton}
                onPress={navigation.goBack}
            >
                <MaterialCommunityIcons
                    name="close-circle-outline"
                    size={40}
                    color={COLORS.gray500}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    closeButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
});
