import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";
import { COLORS } from "../lib/theme";


export default function Home() {
    return (
        <View style={styles.container}>
            <Text></Text>
            <View>
                <SearchInput />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray200,
        alignItems: "center",
        justifyContent: "center",
    },
});
