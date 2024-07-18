// components/TableRow.tsx
import React from 'react';
import movieService from '@/services/movieService';
import Link from 'next/link';
import styles from '../styles/components/General.module.css';

interface Movie {
    title: string;
    release_date: string;
}

interface TableRowProps {
  movie: Movie;
}

const TableRow: React.FC<TableRowProps> = ({ movie }) => {
  return (
    <tr className="border-b border-black-3000 border-x-4 border-indigo-500">
      <td>{movie.title}</td>
      <td>{movie.release_date}</td>
      <td className="border px-4 py-2">
        <Link href={`/movie/${movie.id}`}>
          <div className={styles.button_detail}>Detail</div>
        </Link>
        </td>
    </tr>
  );
};

export default TableRow;
