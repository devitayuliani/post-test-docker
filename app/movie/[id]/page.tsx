// app/movie/[id]/page.tsx
'use client'
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import Image from 'next/image';
import { MovieDetail } from '@/app/types';
import movieService from '@/services/movieService';

const MovieDetailPage = ({params}: {params: {id: string}}) => {
  const searchParams = useParams();
  const id = searchParams;
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (!id) return;
      console.log('Movie ID:', id); // Log the movie ID
      try {
        setLoading(true);
        const movieData = await movieService.getMovieDetail(params.id);
        console.log('Movie data fetched:', movieData);
        setMovie(movieData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        console.error('Error fetching movie data:', id);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!id) {
    return <div>No movie ID specified</div>;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log('Rendering movie:', movie);

  return (
    <div className="container mx-auto p-4">
      {movie ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="mb-4"
          />
          <p className="text-lg">{movie.overview}</p>
          <p className="text-lg">Release Date: {movie.release_date}</p>
          <p className="text-lg">Rating: {movie.vote_average}</p>
          <ul className="list-disc list-inside">
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>Movie not found</div>
      )}
    </div>
  );
};

export default MovieDetailPage;
