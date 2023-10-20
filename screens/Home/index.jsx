import { useState, useRef, useEffect, useCallback } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Keyboard,
    Text,
    RefreshControl,
} from "react-native";

import { COLORS } from "../../lib/theme";
import { spellChecker } from "../../lib/spellChecker";
import useGetQuery from "../../lib/useGetQuery";

import Card from "./Card";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import ToTopButton from "../../components/ToTopButton";
import SearchInput from "./SearchInput";

export default function Home({ navigation }) {
    const { data, isLoading, error, fetchData, refetch } = useGetQuery();

    const [searchInput, setSearchInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showResetButton, setShowResetButton] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const listRef = useRef(null);

    const CONTENT_OFFSET_THRESHOLD = 400;

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        if (searchInput !== "") {
            refetch();
        }
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

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

    const handleSubmit = () => {
        if (!isTyping) {
            fetchData(searchInput);
        }
        if (!isLoading) {
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
            {isLoading || refreshing ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorMessage error={error} />
            ) : (
                <>
                    <FlatList
                        alwaysBounceVertical={false}
                        data={data}
                        initialNumToRender={5}
                        renderItem={({ item }) => (
                            <Card
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
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
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
