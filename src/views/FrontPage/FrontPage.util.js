import axios from 'axios'

export const fetchOpenSanctions = async (query) => {
    query = query.trim();
    
    const state = {
        data: [],
        hasError: false,
    };
    
    async function fetchResults() {
        try {
            const response = await axios.get(`https://api.opensanctions.org/search/default?limit=25&q=${query}&schema=Thing`);
            state.data = response.data.results;
        }
        catch(e) {
            state.hasError = true;
        }
    }

    await fetchResults();

    return state
}
