import { useState, useRef } from "react";
import { StyleSheet, View, TextInput, FlatList, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../lib/theme";
import { createURL } from "../../lib/createURL";

import Button from "../../components/Button";
import ImageCard from "./ImageCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import ToTopButton from "../../components/ToTopButton";
import SearchInput from "./SearchInput";

export default function Home({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const listRef = useRef(null);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const CONTENT_OFFSET_THRESHOLD = 400;

    const handleToTop = () => {
        listRef.current.scrollToOffset({
            offset: 0,
            animated: true,
        });
    };

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
            <SearchInput
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchTerm={searchTerm}
            />
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
                        <ToTopButton handlePress={handleToTop} />
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
});