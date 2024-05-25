"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const response = fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await (await response).json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
