const baseURL = "https://pixabay.com/api/";
const apiKey = "5515282-af6ad889c868eb4873badc58c";

const apiURL = (param) => {
    const params = {
        key: apiKey,
        q: param,
    };

    const searchParams = new URLSearchParams();
    for (const key in params) {
        searchParams.append(key, params[key]);
    }

    const encodedParams = searchParams.toString();

    const URL = `${baseURL}?${encodedParams}`;
    return URL;
};

export { apiURL };
