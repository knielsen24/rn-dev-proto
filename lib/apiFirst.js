const baseURL = "https://pixabay.com/api/";
const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;

const getRequest = (query) => {
    const params = {
        key: apiKey,
        q: query,
    };

    const searchParams = new URLSearchParams(params);

    console.log(searchParams);

    const URL = `${baseURL}?${searchParams}`;

    fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
};

export default getRequest;
