
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBasket as Basketball, Film as Football, Timer, Dumbbell, BadgePlus } from 'lucide-react';

export function EquipmentPage() {
  const equipment = [
    { name: "Basketballs", total: 20, available: 14, icon: Basketball, weeklyRentals: 12 },
    { name: "Footballs", total: 10, available: 7, icon: Football, weeklyRentals: 8 },
    { name: "Soccer Balls", total: 15, available: 11, icon: Football, weeklyRentals: 10 },
    { name: "Volleyballs", total: 12, available: 8, icon: Basketball, weeklyRentals: 9 },
    { name: "Ping Pong Paddles", total: 8, available: 6, icon: BadgePlus, weeklyRentals: 5 },
    { name: "Jump Ropes", total: 25, available: 18, icon: Timer, weeklyRentals: 15 },
    { name: "Badminton Racquets", total: 20, available: 14, icon: BadgePlus, weeklyRentals: 11 },
    { name: "Racquetball Racquets", total: 10, available: 7, icon: BadgePlus, weeklyRentals: 7 },
    { name: "Yoga Mats", total: 30, available: 21, icon: Timer, weeklyRentals: 20 },
    { name: "Dip Belts", total: 10, available: 7, icon: Dumbbell, weeklyRentals: 6 },
    { name: "Ankle Weights", total: 15, available: 11, icon: Dumbbell, weeklyRentals: 9 },
    { name: "Agility Ladders", total: 5, available: 4, icon: Timer, weeklyRentals: 3 }
  ];

  const getAvailabilityColor = (available, total) => {
    const percentage = (available / total) * 100;
    if (percentage >= 70) return "bg-green-500";
    if (percentage >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Equipment Rental Availability</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {equipment.map((item) => {
          const Icon = item.icon;
          const percentage = Math.round((item.available / item.total) * 100);
          const progressColor = getAvailabilityColor(item.available, item.total);

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 group hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-msu-red" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.available} of {item.total} available
                    </p>
                  </div>
                </div>
                <span className={`text-sm font-medium ${
                  percentage >= 70 ? "text-green-600" : 
                  percentage >= 50 ? "text-yellow-600" : "text-red-600"
                }`}>
                  {percentage}%
                </span>
              </div>

              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                <div 
                  className={`absolute left-0 top-0 h-full ${progressColor} transition-all`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-500">
                Last 7 days: {item.weeklyRentals} rentals
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
