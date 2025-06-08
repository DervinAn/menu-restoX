  import React from 'react';
  import Wts1 from "../assets/Wts1.png";
  import Wts3 from "../assets/Wts3.png";
  import { FaStar, FaUtensils } from 'react-icons/fa';

  // const Wts = () => {
  //   return (
  //     <section id="reviews" className='py-12 sm:py-12 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden'>
  //       <div className='container mx-auto px-4 sm:px-6 md:px-8 xl:px-16 relative flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 xl:gap-12'>

  //         {/* MOBILE CONTENT */}
  //         <div className='w-full md:w-1/2 border-2 md:order-1 mb-6 md:mb-10 md:-ml-20 lg:-ml-24 xl:-ml-28 transform hover:-translate-y-2 transition-all duration-300'>
  //           <div className='relative group'>
  //             <img
  //               src={Wts1}
  //               alt="happy customer"
  //               className='w-full h-auto object-cover rounded-2xl shadow-2xl group-hover:rotate-0 transition-all duration-300'
  //               style={{ maxWidth: "min(100%, 640px)" }}
  //             />
  //             <div className='absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 md:-bottom-6 md:-right-2 bg-white p-2
  //             sm:p-3 md:p-4 rounded-2xl shadow-xl '>
  //                 <img src={Wts3} alt="Customer" className='w-10 h-12 sm:w-12 sm:h-12 md:h-14 rounded-full border-4 border-orange-100' />
  //             </div>
  //           </div>
  //         </div>

  //         {/* RIGHT CONTAINTER */}
  //         <div className='w-full md:w-1/2 order-1 md:order-2 '>
  //                 <div className='bg-white/50 backdrop:blur-sm rounded-3xl p-6 sm:p-8  md:p-10 lg:p-12 xl:p-14 shadow-xl
  //                 border-white/50 relative overflow-hidden'>
  //                     <div className='relative z-10'>
  //                         <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8'>
  //                             <FaUtensils className='texxt-orange-500 text-xl sm:text-2xl md:text-2xl lg:text-3xl' />
  //                             <span className='font-bold text-sm sm:text-base md:text-lg lg:text-xl text-orange-600
  //                             uppercase tracking-wider'>
  //                                 Testmonials
  //                             </span>
  //                         </div>
  //                         <h2 className='text-2xl sm:text-3xl md:text-2xl lg:text-5xl font-bold
  //                         text-gray-800 mb-4 sm:mb-6 md:mb-6 lg:mb-8 leading-tight'style={{fontFamily:"Dancing Script, cursive"}}>
  //                             Epicuraan Echoes: <br  className='hidden sm:block'/>Savor the Moments  
  //                         </h2>

  //                         <div className='bg-white/40 rounded-xl p-4 sm:p-6 md:p-6 lg:p-8 mb-6  border-white/30'>
  //                             <div className='flex gap-1 sm:gap-2 mb-3 text-orange-400'>
  //                              {[...Array(5)].map((_, i) => (
  //                                 <FaStar key={i} className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ' />
  //                               ))}
  //                             </div>
  //                             <blockquote className='text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-700 italic
  //                             mb-4 sm:mb-6'>
  //                               Fudo is the best. Besides the many delicious meals, the services is also very good,espacly in the fast delevry.
  //                             </blockquote>
  //                             <div className='flex items-center gap-3 sm:gap-4'>
  //                               <img src={Wts3} alt="Customer" className='w-10 h-12 md:w-14 sm:h-12 md:h-14 rounded-full border-2 border-orange-200' />
  //                               <div>
  //                               <h4 className='text-sm font-bold sm:text-base md:text-lg lg:text-xl text-gray-800'>
  //                                 John Carter 
  //                               </h4>
  //                               <p className='text-sm sm:text-sm md:text-base lg:text-lg text-gray-600'>Food Enthusiast</p>
  //                             </div>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  // export default Wts;


  import ReviewCard from './ReviewCard'; // Import the new component

const Wts = () => {
  const reviews = [
    {
      name: "John Carter",
      rating: 5,
      comment: "Garden Food is the best! Delicious meals and fast delivery.",
    },
    {
      name: "Sarah Mitchell",
      rating: 4,
      comment: "Great food quality and friendly staff!",
    },
    {
      name: "David Lee",
      rating: 5,
      comment: "Loved their vegan options. Will definitely order again.",
    }
  ];

  return (
    <section className='py-12 sm:py-12 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 md:px-8 xl:px-16 relative flex flex-col items-center'>
        {/* Title */}
        <div className='text-center mb-10'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
            Customer Reviews
          </h2>
          <p className='text-gray-600 mt-2'>See what people say about Garden Food</p>
        </div>

        {/* Reviews Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Wts;