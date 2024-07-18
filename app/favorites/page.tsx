'use client'
// app/favorites/page.tsx
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {favorites.map((movie) => (
          <div key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-700">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default FavoritesPage;
