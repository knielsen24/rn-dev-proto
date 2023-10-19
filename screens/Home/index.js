import { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Keyboard } from "react-native";

import { COLORS } from "../../lib/theme";
import { createURL } from "../../lib/createURL";
import { spellChecker, removeNonLetters } from "../../lib/spellChecker";

import ImageCard from "./ImageCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import ToTopButton from "../../components/ToTopButton";
import SearchInput from "./SearchInput";

export default function Home({ navigation }) {
    const [data, setData] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const listRef = useRef(null);

    const CONTENT_OFFSET_THRESHOLD = 400;

    const handleToTop = () => {
        listRef.current.scrollToOffset({
            offset: 0,
            animated: true,
        });
    };

    const handleChange = (value) => {
        const filterWord = removeNonLetters(value);
        setSearchInput(filterWord);
        const correctedWord = spellChecker(filterWord);
        setSearchInput(correctedWord);
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const URL = createURL(searchInput);
            const response = await fetch(URL);
            const results = await response.json();
            setData(results.hits);
        } catch (error) {
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
                searchInput={searchInput}
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
