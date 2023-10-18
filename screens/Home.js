import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { COLORS } from "../lib/theme";
import { createURL } from "../lib/api";

import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (value) => setSearchTerm(value);

    const handleSubmit = async () => {
        const URL = createURL(searchTerm);
        try {
            setIsLoading(true);
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data); // Check the data returned from the API
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage("An error occurred while making your search.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name="search"
                        size={24}
                        color={COLORS.gray400}
                    />
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: COLORS.gray200,
        alignItems: "center",
        justifyContent: "center",
    },
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
