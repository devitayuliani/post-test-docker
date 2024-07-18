// app/[category]/page.tsx
import { useQuery } from '@tanstack/react-query';
import movieService from '../../services/movieService';
import Link from 'next/link';
import TableRow from '@/components/TableRow';
import styles from "@/styles/components/General.module.css"

interface Movie {
  id: number;
  title: string;
  release_date: string;
}

const fetchMovies = async (category: string) => {
  if (category === 'now-playing') return movieService.getNowPlaying();
  if (category === 'popular') return movieService.getPopular();
  if (category === 'upcoming') return movieService.getUpcoming();
  return [];
};

const MovieList = ({ category }: { category: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies', category],
    queryFn: () => fetchMovies(category),
  });


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies</div>;

  return (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className={styles.body1}>
        <tr>
          <th >Title</th>
          <th >Release Date</th>
          <th >Action</th>
        </tr>
      </thead>
      <tbody className={styles.body1}>
      {data?.results.map((movie: Movie) => (
          <TableRow key={movie.id} movie={movie} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default MovieList;
