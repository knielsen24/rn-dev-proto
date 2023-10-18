import { useState, useRef } from "react";
import { StyleSheet, View, TextInput, FlatList, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../lib/theme";
import { createURL } from "../lib/createURL";

import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import ToTopButton from "../components/ToTopButton";

export default function Home({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const listRef = useRef(null);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const CONTENT_OFFSET_THRESHOLD = 400;

    const handleChange = (value) => setSearchTerm(value);

    const handleSubmit = async () => {
        const URL = createURL(searchTerm);
        try {
            setIsLoading(true);
            const response = await fetch(URL);
            const results = await response.json();
            setData(results.hits);
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage("An error occurred while making your search.");
        } finally {
            setIsLoading(false);
            Keyboard.dismiss();
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
            {errorMessage ? <ErrorMessage error={errorMessage} /> : null}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <FlatList
                        alwaysBounceVertical={false}
                        data={data}
                        initialNumToRender={5}
                        renderItem={({ item }) => (
                            <ImageCard
                                imageURL={item.webformatURL}
                                views={item.views}
                                likes={item.likes}
                                downloads={item.downloads}
                                navigation={navigation}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        ref={listRef}
                        onScroll={(event) => {
                            setContentVerticalOffset(
                                event.nativeEvent.contentOffset.y
                            );
                        }}
                    />
                    {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD &&
                    data ? (
                        <ToTopButton
                            handlePress={() =>
                                listRef.current.scrollToOffset({
                                    offset: 0,
                                    animated: true,
                                })
                            }
                        />
                    ) : null}
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray200,
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
