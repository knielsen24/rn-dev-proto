import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, FlatList, Keyboard, Text } from "react-native";

import { COLORS } from "../../lib/theme";
import { getRequest } from "../../lib/api";
import { spellChecker } from "../../lib/spellChecker";

import ImageCard from "./ImageCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import ToTopButton from "../../components/ToTopButton";
import SearchInput from "./SearchInput";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function Home({ navigation }) {
    const [data, setData] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const [isTyping, setIsTyping] = useState(false);
    const [showResetButton, setShowResetButton] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const listRef = useRef(null);

    const CONTENT_OFFSET_THRESHOLD = 400;

    const handleToTop = () => {
        listRef.current.scrollToOffset({
            offset: 0,
            animated: true,
        });
    };

    const handleReset = () => {
        setSearchInput("");
        setShowResetButton(false);
    };

    const handleChange = (value) => {
        setSearchInput(value);
        if (searchInput !== "") {
            setShowResetButton(true);
        }
        setIsTyping(true);
    };

    useEffect(() => {
        if (searchInput === "") {
            setShowResetButton(false);
        }
        if (isTyping) {
            const timer = setTimeout(() => {
                const autoCorrectWord = spellChecker(searchInput);
                setSearchInput(autoCorrectWord);
                setIsTyping(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [searchInput, isTyping]);

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            if (!isTyping) {
                const results = await getRequest(searchInput);
                setData(results);
            }
        } catch (error) {
            setErrorMessage(error.message);
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
                showResetButton={showResetButton}
                handleReset={handleReset}
            />
            {/* <View style={styles.titleContainer}>
                <Text>Pixabay Lite with autocorrect</Text>
            </View> */}
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
    titleContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
});
