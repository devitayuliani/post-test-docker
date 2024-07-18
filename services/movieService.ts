// services/movieService.ts
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;


const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

const movieService = {
  getNowPlaying: async () => {
    const { data } = await axiosInstance.get(`${BASE_URL}/movie/now_playing?language=en-US&page=1`);
    return data;
  },
  getPopular: async () => {
    const { data } = await axiosInstance.get(`${BASE_URL}/movie/popular?language=en-US&page=1`);
    return data;
  },
  getUpcoming: async () => {
    const { data } = await axiosInstance.get(`${BASE_URL}/movie/upcoming?language=en-US&page=1'`);
    return data;
  },
  getMovieDetail: async (id: string) => {
    const { data } = await axiosInstance.get(`${BASE_URL}/movie/${id}`);
    console.log(data);
    return data;
  },
};

export default movieService;