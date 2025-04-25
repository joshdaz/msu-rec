
import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { format } from "date-fns";

export function CapacitySection() {
  // Simulated last visit data
  const lastVisit = new Date(2025, 3, 24, 18, 30); // April 24, 2025, 6:30 PM

  return (
    <section id="capacity" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Users className="text-msu-red h-6 w-6" />
          <h2 className="text-2xl font-bold">Current Rec Center Capacity</h2>
        </div>
        
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="absolute left-0 top-0 h-full capacity-moderate w-[40%]"></div>
        </div>
        
        <div className="text-center mb-4">
          <p className="text-xl font-semibold">40% Occupied</p>
          <p className="text-gray-600">~50 users now</p>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Your Last Visit</h3>
          <p className="text-gray-600">
            {format(lastVisit, "MMMM d, yyyy 'at' h:mm a")}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
