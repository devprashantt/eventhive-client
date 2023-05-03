const fetchData = async () => {
    const collegesResponse = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/colleges`);
    const colleges = await collegesResponse.json();

    const eventsResponse = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/events`);
    const events = await eventsResponse.json();

    const organizersResponse = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/organizers`);
    const organizers = await organizersResponse.json();

    const participantsResponse = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/participants`);
    const participants = await participantsResponse.json();

    const categoriesResponse = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/categories`);
    const categories = await categoriesResponse.json();

    return {
        colleges,
        events,
        organizers,
        participants,
        categories
    };
};

export default fetchData;
