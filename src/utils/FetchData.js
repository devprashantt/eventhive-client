const fetchData = async () => {
    const collegesResponse = await fetch('http://localhost:3000/colleges');
    const colleges = await collegesResponse.json();

    const eventsResponse = await fetch('http://localhost:3000/events');
    const events = await eventsResponse.json();

    const organizersResponse = await fetch('http://localhost:3000/organizers');
    const organizers = await organizersResponse.json();

    const participantsResponse = await fetch('http://localhost:3000/participants');
    const participants = await participantsResponse.json();

    const categoriesResponse = await fetch('http://localhost:3000/categories');
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
