// import React from "react";

// const MovieCard = ({ title, releaseDate, rating, imageUrl, trendingRank }) => {
//   return (
//     <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
//       <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
//       {trendingRank && (
//         <div className="absolute top-2 left-2 bg-gray-600 text-xs font-bold py-1 px-2 rounded">
//           #{trendingRank} Trending
//         </div>
//       )}
//       <div className="p-4"> 
//         <h3 className="text-lg font-bold">{title}</h3>
//         <p className="text-sm">{releaseDate}</p>
//         <p className="text-sm font-bold">Rating: {rating}</p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
import React from "react";

const MovieCard = ({ title, releaseDate, rating, imageUrl, trendingRank }) => {
  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
      {trendingRank && (
        <div className="absolute top-2 left-2 bg-gray-600 text-xs font-bold py-1 px-2 rounded">
          #{trendingRank} Trending
          {/* <p>{rating}</p>
          <p>{title}</p>
          <p>{releaseDate}</p> */}
        </div>
      )}

      <div className="p-4">

        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{releaseDate}</p>
        <p className="text-sm font-bold">{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;

