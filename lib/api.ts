import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },
})

export const fetchNowPlayingMovies = async () => {
  const response = await api.get('/movie/now_playing')
  return response.data.results
}

export const fetchPopularMovies = async () => {
  const response = await api.get('/movie/popular')
  return response.data.results
}

export const fetchUpcomingMovies = async () => {
  const response = await api.get('/movie/upcoming')
  return response.data.results
}
