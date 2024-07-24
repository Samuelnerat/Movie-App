import React from "react";
import MovieCard from "./MovieCard";

const movies = {
  trending: [
    {
      title: "Furiosa: A Mad Max Saga",
      releaseDate: "May 22nd 2024",
      rating: "7.7",
      imageUrl:
        "https://image.tmdb.org/t/p/original/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
      trendingRank: 1,
    },
    {
      title: "House of the Dragon",
      releaseDate: "July 9th 2024",
      rating: "8.4",
      imageUrl:
        "https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
      trendingRank: 2,
    },
    {
      title: "Inside Out 2",
      releaseDate: "June 11th 2024",
      rating: "7.7",
      imageUrl:
        "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      trendingRank: 3,
    },
    {
      title: "The Boys",
      releaseDate: "July 9th 2024",
      rating: "8.5",
      imageUrl:
        "https://image.tmdb.org/t/p/original/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
      trendingRank: 4,
    },
    {
      title: "Beverly Hills Cop: Axel F",
      releaseDate: "June 20th 2024",
      rating: "7.0",
      imageUrl:
        "https://image.tmdb.org/t/p/original/zszRKfzjM5jltiq8rk6rasKVpUv.jpg",
      trendingRank: 5,
    },
    {
      title: "The Boy and the Heron",
      releaseDate: "July 14th 2023",
      rating: "7.5",
      imageUrl:
        "https://image.tmdb.org/t/p/original/f4oZTcfGrVTXKTWg157AwikXqmP.jpg",
      trendingRank: 6,
    },
  ],
  nowPlaying: [
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

    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      releaseDate: "June 2th 2024",
      rating: "9.8",
      imageUrl:
        "https://image.tmdb.org/t/p/original/hPfWHgq07nXbeldwEGxWB4JqwtE.jpg",
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      releaseDate: "June 21th 2024",
      rating: "6.8",
      imageUrl:
        "https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    },

  ],
  topRated: [
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
  popularTv: [
    {
      title: "The Chef VIP",
      releaseDate: "May 22nd 2024",
      rating: "7.7",
      imageUrl:
        "https://image.tmdb.org/t/p/original/6Gy1ReRZ9sK9g8TPXZGz7CcQvrV.jpg",
      trendingRank: 1,
    },
    {
      title: "House of the Dragon",
      releaseDate: "July 9th 2024",
      rating: "8.4",
      imageUrl:
        "https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
      trendingRank: 2,
    },
    {
      title: "Inside Out 2",
      releaseDate: "June 11th 2024",
      rating: "7.7",
      imageUrl:
        "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      trendingRank: 3,
    },
    {
      title: "Law & Order1: Special...",
      releaseDate: "July 9th 2024",
      rating: "8.5",
      imageUrl:
        "https://image.tmdb.org/t/p/original/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg",
      trendingRank: 4,
    },
    {
      title: "Greys Anatomy",
      releaseDate: "June 20th 2024",
      rating: "7.0",
      imageUrl:
        "https://image.tmdb.org/t/p/original/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg",
      trendingRank: 5,
    },
    {
      title: "The Boys",
      releaseDate: "July 14th 2023",
      rating: "7.5",
      imageUrl:
        "https://image.tmdb.org/t/p/original/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg",
      trendingRank: 6,
    },
  ],
  onThe: [
    {
      title: "WWWE Raw",
      releaseDate: "july 12th 2024",
      rating: "7.7",
      imageUrl:
        "https://image.tmdb.org/t/p/original/qvQ2Fu75bNUiZ1yzuHI3wkTGy7C.jpg",
      trendingRank: 1,
    },
    {
      title: "House of the Dragon",
      releaseDate: "July 9th 2024",
      rating: "8.4",
      imageUrl:
        "https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
      trendingRank: 2,
    },
    {
      title: "The Boys",
      releaseDate: "July 11th 2024",
      rating: "8.5",
      imageUrl:
        "https://image.tmdb.org/t/p/original/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
      trendingRank: 3,
    },
    {
      title: "Top Chef VIP ",
      releaseDate: "July 12th 2024",
      rating: "5.6",
      imageUrl:
        "https://image.tmdb.org/t/p/original/6Gy1ReRZ9sK9g8TPXZGz7CcQvrV.jpg",
      trendingRank: 4,
    },
    {
      title: "No Rancho Fundo",
      releaseDate: "July 12th 2024",
      rating: "5.2",
      imageUrl:
        "https://image.tmdb.org/t/p/original/zszRKfzjM5jltiq8rk6rasKVpUv.jpg",
      trendingRank: 5,
    },
    {
      title: "The Boy and the Heron",
      releaseDate: "July 14th 2023",
      rating: "7.5",
      imageUrl:
        "https://image.tmdb.org/t/p/original/f4oZTcfGrVTXKTWg157AwikXqmP.jpg",
    
    },
  ],
  popularMovie: [
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

const MovieSection = () => {
  return (
    <div className="bg-gray-700 text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {movies.trending.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.nowPlaying.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Top Rated movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.topRated.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Popular Tv Show</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.popularTv.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">On The Airf</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.onThe.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
