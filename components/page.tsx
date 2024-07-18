'use client'
import { useState } from "react";
import styles from '../styles/components/General.module.css';
import { useRouter } from "next/navigation";
import Link from "next/link";


const Home = () => {
  
  const router = useRouter()

  const handleNowPlaying = () => {
    // Redirect to the specified route
    router.push('/movies/now-playing');
  };
  const handlePopuler = () => {
    // Redirect to the specified route
    router.push('/movies/popular');
  };
  const handleUpcoming = () => {
    // Redirect to the specified route
    router.push('/movies/upcoming');
  };

  return (
    <div className={styles.container2}>
      <div className={styles.form}>
      <h1 className="text-black text-center">Silahkan klik TDMB App</h1>
    
      <button className={styles.button_nowplaying} onClick={handleNowPlaying}>Now Playing
      </button>
      <button className={styles.button_popular} onClick={handlePopuler}>Populer
      </button>
      <button className={styles.button_upcoming} onClick={handleUpcoming}>Upcoming
      </button>
    </div>
    </div>
  );
};

export default Home;