// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const Hero = () => {
//   return (
//     <section className="hero-section w-full h-screen flex items-center justify-center bg-gray-100">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true} // Enable looping
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }} // Enable pagination bullets
//         navigation // Enable navigation arrows
//         modules={[Autoplay, Pagination,
//            Navigation]} // Include required modules
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>
//           <div 
//             className="hero-slide flex flex-col items-start  px-10 justify-center h-screen text-white bg-cover bg-center" 
//             style={{ backgroundImage: 'url(https://image.tmdb.org/t/p/original/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg)' }}
//           >
//              <div class=" w-full absolute bottom-10 max-w-md  px-3">
//               <h2 class="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl ">Despicable Me 4</h2>
//               <p class="text-ellipsis line-clamp-3 my-2">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
//               <div class="flex items-center gap-4">
//                 <p>Rating : 7.4+</p><span>|</span><p>View : 4182</p>
//                 </div>
//                 <a href="/movie/519182">
//                 <button class=" bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button
//                 ></a>
//                 </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div 
//             className="hero-slide flex flex-col items-start px-10  h-screen text-white bg-cover bg-center" 
//             style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg")' }}
//           >
            
//             <div class=" w-full absolute bottom-10 max-w-md  px-3">
//               <h2 class="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl ">House of the Dragon</h2>
//               <p class="text-ellipsis line-clamp-3 my-2">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
//               <div class="flex items-center gap-4">
//                 <p>Rating : 7.4+</p><span>|</span><p>View : 4182</p>
//                 </div>
//                 <a href="/movie/519182">
//                 <button class=" bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button
//                 ></a>
//                 </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div 
//             className="hero-slide flex flex-col items-start px-10 justify-center h-screen text-white bg-cover bg-center" 
//             style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg")' }}
//           >
//              <div class=" w-full absolute bottom-10 max-w-md  px-3">
//               <h2 class="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl ">Law & Order1: Special..</h2>
//               <p class="text-ellipsis line-clamp-3 my-2">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
//               <div class="flex items-center gap-4">
//                 <p>Rating : 7.4+</p><span>|</span><p>View : 4182</p>
//                 </div>
//                 <a href="/movie/519182">
//                 <button class=" bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button
//                 ></a>
//                 </div>
//           </div>
//         </SwiperSlide>
//         {/* Add more SwiperSlides as needed */}
//         {/* <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div> */}
//       </Swiper>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  return (
    <section className="hero-section w-full h-screen flex items-center justify-center bg-gray-100">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true} // Enable looping
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} // Enable pagination bullets
        navigation // Enable navigation arrows
        modules={[Autoplay, Pagination, Navigation]} // Include required modules
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div 
            className="hero-slide flex flex-col items-start px-10 justify-center h-screen text-white bg-cover bg-center" 
            style={{ backgroundImage: 'url(https://image.tmdb.org/t/p/original/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg)' }}
          >
            <div className="w-full absolute bottom-10 max-w-md px-3">
              <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">Despicable Me 4</h2>
              <p className="text-ellipsis line-clamp-3 my-2">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
              <div className="flex items-center gap-4">
                <p>Rating: 7.4+</p><span>|</span><p>View: 4182</p>
              </div>
              <a href="/movie/519182">
                <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className="hero-slide flex flex-col items-start px-10 h-screen text-white bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg")' }}
          >
            <div className="w-full absolute bottom-10 max-w-md px-3">
              <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">House of the Dragon</h2>
              <p className="text-ellipsis line-clamp-3 my-2">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
              <div className="flex items-center gap-4">
                <p>Rating: 7.4+</p><span>|</span><p>View: 4182</p>
              </div>
              <a href="/movie/519182">
                <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className="hero-slide flex flex-col items-start px-10 justify-center h-screen text-white bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg")' }}
          >
            <div className="w-full absolute bottom-10 max-w-md px-3">
              <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">Law & Order: Special...</h2>
              <p className="text-ellipsis line-clamp-3 my-2">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
              <div className="flex items-center gap-4">
                <p>Rating: 7.4+</p><span>|</span><p>View: 4182</p>
              </div>
              <a href="/movie/519182">
                <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </section>
  );
};

export default Hero;
