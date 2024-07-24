import React from 'react';
import MovieCard from '../home/MovieCard';

// Movie data
const movies = {
  popularMovies: [
    {
      title: "Despicable Me 4",
      releaseDate: "June 11th 2024",
      rating: "7.7",
      imageUrl:
        "https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    },
    {
      title: "A Quiet Place: Day One",
      releaseDate: "May 22nd 2024",
      rating: "7.7",
      imageUrl:
        "https://image.tmdb.org/t/p/original/yrpPYKijwdMHyTGIOd1iK1h0Xno.jpg",
    },
    {
      title: "Kingdom of the Planet of the Apes",
      releaseDate: "June 20th 2024",
      rating: "7.9",
      imageUrl:
        "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    },
    {
      title: "The Watchers",
      releaseDate: "June 5th 2024",
      rating: "7.0",
      imageUrl:
        "https://image.tmdb.org/t/p/original/vZVEUPychdvZLrTNwWErr9xZFmu.jpg",
    },
    {
      title: "IF",
      releaseDate: "June 4th 2024",
      rating: "6.1",
      imageUrl:
        "https://image.tmdb.org/t/p/original/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg",
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      releaseDate: "June 20th 2024",
      rating: "5.8",
      imageUrl:
        "https://image.tmdb.org/t/p/original/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    },

    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      releaseDate: "June 20th 2024",
      rating: "5.8",
      imageUrl:
        "https://image.tmdb.org/t/p/original/zszRKfzjM5jltiq8rk6rasKVpUv.jpg",
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      releaseDate: "June 20th 2024",
      rating: "5.8",
      imageUrl:
        "https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    },

    
   
  ],
};

const PopularMovieShows = () => {
  return (
    <div className="bg-gray-700 text-white pt-20 p-8">
      <h2 className="text-2xl font-bold mb-4">Popular Movie Shows</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.popularMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovieShows;
