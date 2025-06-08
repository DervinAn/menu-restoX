import React, { useState } from 'react';

import BannerVideo from '../assets/Bannervideo.mp4'; // Local video
import BannerFood from '../assets/BannerFood.png';
import BannerArrow from '../assets/BannerArrow.png';
import BannerClock from '../assets/BannerClock.png';
import Bannersmall1 from '../assets/Bannersmall1.png';
import Bannersmall2 from '../assets/Bannersmall2.png';
import Bannersmall3 from '../assets/Bannersmall3.png';
import FireIcon from '../assets/FireIcon.png';
import '../components/global.css';

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
   <div id="home" className="bg-white pt-12 md:pt-16 min-h-[500px] flex items-center">
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative shadow-lg">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-5 -right-5 text-white bg-black rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-red-500"
            >
              &times;
            </button>
            <video
              src={BannerVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:flex-1 text-center lg:text-left">
          <h3 className="text-lg mt-5 md:text-xl lg:text-2xl font-bold font-comfortaa text-gray-600 mb-2 md:mb-3">
            Mane Dion Fuster
          </h3>

          <h1 className="text-3xl md:text-4xl lg:text-7xl font-pacifico font-extrabold leading-tight mb-4">
            Claim best offer on <br />
            <span className="text-orange-600">Fast Food</span> <br className="hidden md:block" />
            <span className="text-yellow-500">Restaurants</span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6">
            Our hub is to fill your tummy with delicious food <br className="hidden md:block" />
            and with fast and free delivery.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-red-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-red-600 transition hover:scale-105 text-sm md:text-base">
              Get Started
            </button>

            <button className="flex items-center gap-2 md:gap-3 group" onClick={() => setShowVideo(true)}>
                <span className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center transition group-hover:bg-red-600 group-hover:scale-110 shadow-lg relative">
                  <span className="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="text-lg text-white font-bold z-10">▶</span>
                </span>
                <span className="text-gray-600 group-hover:text-red-500 font-semibold text-sm md:text-base">Watch Video</span>
              </button>
          </div>

          <div className='flex flex-col sm:flex-row items-center sm:items-center gap-4 mt-6'>
              <div className='flex -space-x-3'>
                  <img src={Bannersmall1} alt="customer"  className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2
                   border-white shadow-md'/>
                   <img src={Bannersmall2} alt="customer"  className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2
                   border-white shadow-md'/>
                   <img src={Bannersmall3} alt="customer"  className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2
                   border-white shadow-md'/>
              </div>
              <div className=''>
                  <p className='text-lg md:text-xl font-bold flex items-center'>
                        <span className='text-yellow-500 mr-2'>
                          &#x2605;&#x2605;&#x2605;7.48k
                        </span>
                  </p>
                  <p className='text-gray-600 text-sm md:text-base '>
                      Our happy customers 
                  </p>
              </div>
          </div>
        </div>

        {/* right section */}

        <div className='w-full lg:flex-1 relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none max-auto'>
            <div className='relative max-auto'>
              <img src={BannerFood} alt="Banner Food" className='w-full h-auto object-cover transform
              -rotate-180 hover:rotate-0 transition duration-500' />
              <div className=' absolute left-2 sm:left-4 md:-left-6 top-4 sm:top-6 w-14 sm:w-16
              md:w-20'> 
              <img src={BannerClock} alt="" className='w-full h-auto -rotate-3 hover:rotate-0' />
              </div>
              <div className='absolute right-2 sm:-right-5 md:-right-12 top-1/2 transform -translate-y-1/2'>
                <div className=' relative '>
                      <img src={FireIcon} alt="" className='w-10 sm:12 md:w-14 mb-20 sm:mb-32 md:md-40' />
                      <img src={BannerArrow} alt="" className='w-12 sm:-16 md:w-20 transform rotate-90' />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;












// import React, { useState } from 'react';

// import BannerVideo from '../assets/Bannervideo.mp4'; // Local video
// import BannerFood from '../assets/BannerFood.png';
// import BannerArrow from '../assets/BannerArrow.png';
// import BannerClock from '../assets/BannerClock.png';
// import Bannersmall1 from '../assets/Bannersmall1.png';
// import Bannersmall2 from '../assets/Bannersmall2.png';
// import Bannersmall3 from '../assets/Bannersmall3.png';
// import FireIcon from '../assets/FireIcon.png';

// const Banner = () => {
//   const [showVideo, setShowVideo] = useState(false);

//   return (
//     <div className="bg-white pt-12 md:pt-16 min-h-[500px] flex flex-col items-center justify-center relative">

//       {/* Hero Content */}
//       <div className="text-center max-w-2xl px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Garden Food</h1>
//         <p className="text-gray-600 mb-6 text-lg">
//           Discover the best meals in town — fresh, fast, and full of flavor.
//         </p>
//         <button
//           onClick={() => setShowVideo(true)}
//           className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition"
//         >
//           ▶️ Watch Intro Video
//         </button>
//       </div>

//       {/* Optional: Banner Image */}
//       <div className="mt-8">
//         <img src={BannerFood} alt="Banner" className="max-w-xs md:max-w-md lg:max-w-lg" />
//       </div>

//       {/* Video Modal */}
//       {showVideo && (
//         <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
//           <div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative shadow-lg">
//             <button
//               onClick={() => setShowVideo(false)}
//               className="absolute -top-5 -right-5 text-white bg-black rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-red-500"
//             >
//               &times;
//             </button>
//             <video
//               src={BannerVideo}
//               controls
//               autoPlay
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banner;
