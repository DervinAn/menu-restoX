// ReviewCard.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ name, rating, comment }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < rating ? "#FFD700" : "#ccc"} />
        ))}
      </div>
      <p className="italic text-gray-700">{comment}</p>
      <p className="mt-2 font-semibold text-orange-600">— {name}</p>
    </div>
  );
};

export default ReviewCard;