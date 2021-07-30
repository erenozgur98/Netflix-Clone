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
}

export default requests;