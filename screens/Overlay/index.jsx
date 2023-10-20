import { View, Image, StyleSheet } from "react-native";
import { COLORS } from "../../lib/theme";
import CloseButton from "../../components/CloseButton";

export default function Overlay({ navigation, route }) {
    const URL = route.params.imageURL;

    const handlePress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: URL }}
                style={styles.image}
                resizeMode="contain"
            />
            <CloseButton handlePress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.gray200,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
});
