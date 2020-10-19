const apiKey = 'aa8103c96a5c481a951da99868cd8cbc';

function fetchArticles (query) {
    query = refs.search.value;
    const url = `https://newsapi.org/v2/everything?q=${query}&language=ru`;
    const options = {
        headers: {
            Authorization: apiKey,
        },
    };

    return fetch(url, options)
    .then(res => res.json())
    .then(({ articles }) => articles);
}

export default fetchArtilces;