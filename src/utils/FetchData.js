import axios from 'axios';

const fetchData = async () => {
    try {
        const collegesResponse = await axios.get(`${import.meta.env.VITE_BACKEND_HOST}/colleges`);
        const colleges = collegesResponse.data;

        const eventsResponse = await axios.get(`${import.meta.env.VITE_BACKEND_HOST}/events`);
        const events = eventsResponse.data;

        const organizersResponse = await axios.get(`${import.meta.env.VITE_BACKEND_HOST}/organizers`);
        const organizers = organizersResponse.data;

        const participantsResponse = await axios.get(`${import.meta.env.VITE_BACKEND_HOST}/participants`);
        const participants = participantsResponse.data;

        const categoriesResponse = await axios.get(`${import.meta.env.VITE_BACKEND_HOST}/categories`);
        const categories = categoriesResponse.data;

        return {
            colleges,
            events,
            organizers,
            participants,
            categories
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchData;



