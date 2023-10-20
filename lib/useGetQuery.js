import { useState } from "react";
import { apiURL } from "./apiURL";

export default function useGetQuery() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    const fetchData = async (query) => {
        const URL = apiURL(query);
        setQuery(URL);
        setIsLoading(true);
        try {
            const response = await fetch(URL);
            const results = await response.json();
            setData(results.hits);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const refetch = () => {
        setIsLoading(true);
        setError(null);
        fetchData(query);
    };

    return { fetchData, data, isLoading, error, refetch };
}
