// let baseUrl = 'https://api.themoviedb.org/3/';
// let IMGurl = 'https://image.tmdb.org/t/p/w300';


const apiKey = 'af737f76cdba5b7435e17cc94568c07d';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${apiKey}&with_genres=99`,
    fetchDramaMovies: `/discover/movie?api_key=${apiKey}&with_genres=18`,
    fetchAdventureMovies: `/discover/movie?api_key=${apiKey}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchCrimeMovies: `/discover/movie?api_key=${apiKey}&with_genres=80`,
    fetchFamilyMovies: `/discover/movie?api_key=${apiKey}&with_genres=10751`,
    fetchFantasyMovies: `/discover/movie?api_key=${apiKey}&with_genres=14`,
    fetchHistoryMovies: `/discover/movie?api_key=${apiKey}&with_genres=36`,
    fetchMusicMovies: `/discover/movie?api_key=${apiKey}&with_genres=10402`,
    fetchMysteryMovies: `/discover/movie?api_key=${apiKey}&with_genres=9648`,
    fetchWarMovies: `/discover/movie?api_key=${apiKey}&with_genres=10752`,
}

export default requests;

// const query = 'avengers'
// const language = 'en-US'

// https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=${language}&query=${query}&page=1&include_adult=false