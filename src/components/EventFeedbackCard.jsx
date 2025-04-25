
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";

export function EventFeedbackCard({ event, onSubmit }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ event, rating, comment });
    setRating(0);
    setComment("");
    setIsExpanded(false);
  };

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <motion.button
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="bg-msu-red bg-opacity-10 p-2 rounded-lg">
            <Calendar className="w-6 h-6 text-msu-red" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold">{event.name}</h3>
            <p className="text-sm text-gray-600">{event.date}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-4 border-t space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  How would you rate this event?
                </label>
                <StarRating rating={rating} setRating={setRating} size="large" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Share your thoughts
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-msu-red focus:border-transparent transition-shadow"
                  placeholder="What did you think about the event?"
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-msu-red hover:bg-msu-red/90"
                  disabled={!rating || !comment}
                >
                  Submit Feedback
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
