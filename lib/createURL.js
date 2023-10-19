const baseURL = "https://pixabay.com/api/";
const apiKey = "5515282-af6ad889c868eb4873badc58c";
// const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;

const createURL = (param) => {
    const params = {
        key: apiKey,
        q: param,
    };

    const searchParams = new URLSearchParams(params);

    const URL = `${baseURL}?${searchParams}`;
    return URL;
};

export { createURL };