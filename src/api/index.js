import axios from 'axios'


const url = 'https://api.themoviedb.org/3/movie/76341?api_key=4e44d9029b1270a757cddc766a1bcb63'

export const fetchMovies = () => axios.get(url)


