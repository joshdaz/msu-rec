
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function StarRating({ rating, setRating, size = "default" }) {
  const stars = [1, 2, 3, 4, 5];
  
  const starSizes = {
    default: "w-6 h-6",
    large: "w-8 h-8",
    small: "w-4 h-4"
  };

  return (
    <div className="flex gap-1">
      {stars.map((star) => (
        <motion.button
          key={star}
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setRating(star)}
          className="focus:outline-none"
        >
          <Star
            className={`${starSizes[size]} ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            } transition-colors`}
          />
        </motion.button>
      ))}
    </div>
  );
}
