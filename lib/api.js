import { createURL } from "./createURL";

const getRequest = async (query) => {
    const URL = createURL(query);
    try {
        const response = await fetch(URL);
        const results = await response.json();
        return results.hits;
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
        throw new Error(
            "An error occurred while fetching data. Please try again later."
        );
    }
};

export { getRequest };
