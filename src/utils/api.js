import axios from "axios";

export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const options = {
    params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    }
};

export const fetchFromAPI = async (url, params = {}) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, {
            ...options,
            params: {
                ...options.params,
                ...params,
            },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
};
