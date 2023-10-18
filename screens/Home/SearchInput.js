import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../lib/theme";

import Button from "../../components/Button";

export default function SearchInput({
    handleChange,
    handleSubmit,
    searchTerm,
}) {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
                <MaterialIcons name="search" size={24} color={COLORS.gray400} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Search for an Image"
                    onChangeText={handleChange}
                    value={searchTerm}
                    color={COLORS.gray600}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button handlePress={handleSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.gray100,
        borderRadius: 10,
        padding: 8,
        paddingHorizontal: 10,
        shadowColor: COLORS.violet600,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    textInput: {
        width: "100%",
        height: 30,
        fontSize: 18,
        marginLeft: 8,
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
});