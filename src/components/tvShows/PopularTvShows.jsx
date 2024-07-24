import React from 'react';
import MovieCard from '../home/MovieCard';

// Movie data
const movies = {
  popularTv: [
    {
      title: "The Chef VIP",
      releaseDate: "May 22nd 2024",
      rating: "7.7",
      imageUrl: "https://image.tmdb.org/t/p/original/6Gy1ReRZ9sK9g8TPXZGz7CcQvrV.jpg",
    },
    {
      title: "House of the Dragon",
      releaseDate: "July 9th 2024",
      rating: "8.4",
      imageUrl: "https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
    },
    {
      title: "Inside Out 2",
      releaseDate: "June 11th 2024",
      rating: "7.7",
      imageUrl: "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    },
    {
      title: "Law & Order: Special...",
      releaseDate: "July 9th 2024",
      rating: "8.5",
      imageUrl: "https://image.tmdb.org/t/p/original/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg",
    },
    {
      title: "Grey's Anatomy",
      releaseDate: "June 20th 2024",
      rating: "7.0",
      imageUrl: "https://image.tmdb.org/t/p/original/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg",
    },
    {
      title: "The Boys",
      releaseDate: "July 14th 2023",
      rating: "7.5",
      imageUrl: "https://image.tmdb.org/t/p/original/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg",
    },
    {
        title: "The Chef VIP",
        releaseDate: "May 22nd 2024",
        rating: "7.7",
        imageUrl: "https://image.tmdb.org/t/p/original/6Gy1ReRZ9sK9g8TPXZGz7CcQvrV.jpg",
      },
      {
        title: "House of the Dragon",
        releaseDate: "July 9th 2024",
        rating: "8.4",
        imageUrl: "https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
      },
      {
        title: "Inside Out 2",
        releaseDate: "June 11th 2024",
        rating: "7.7",
        imageUrl: "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      },
      {
        title: "Law & Order: Special...",
        releaseDate: "July 9th 2024",
        rating: "8.5",
        imageUrl: "https://image.tmdb.org/t/p/original/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg",
      },
      {
        title: "Grey's Anatomy",
        releaseDate: "June 20th 2024",
        rating: "7.0",
        imageUrl: "https://image.tmdb.org/t/p/original/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg",
      },
  ],
};

const PopularTvShows = () => {
  return (
    <div className="bg-gray-700 text-white pt-20 p-8">
      <h2 className="text-2xl font-bold mb-4">Popular TV Shows</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.popularTv.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularTvShows;
