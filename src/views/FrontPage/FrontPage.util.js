import axios from 'axios'

export const fetchOpenSanctions = async (query) => {
    query = query.trim();
    
    const state = {
        data: [],
        error: null
    };
    
    async function fetchResults() {
        await axios.get(`https://api.opensanctions.org/search/default?limit=25&q=${query}&schema=Thing`)
        // await axios.get("/foo")
            .then((response) => {
                state.data = response.data.results
            })
            .catch(function (error) {
                if (error.response) {
                    state.error = error.response.status;
                }
            });
    }

    await fetchResults();

    return state
}
