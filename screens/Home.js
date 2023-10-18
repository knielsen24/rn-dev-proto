import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <View>
                <SearchInput />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
