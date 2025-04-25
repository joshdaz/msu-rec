
import React from "react";
import { motion } from "framer-motion";
import { Users, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function DashboardPage() {
  const { toast } = useToast();
  const lastVisit = new Date(2025, 3, 24, 18, 30);
  const equipment = [
    { name: "Basketballs", available: true },
    { name: "Yoga Mats", available: false },
    { name: "Volleyballs", available: true, count: 2 }
  ];

  const suggestedEvents = [
    {
      name: "Spin Class",
      date: "November 1, 2025",
      time: "5:00 PM",
      location: "Studio A"
    },
    {
      name: "Rock Climbing Intro",
      date: "November 2, 2025",
      time: "2:00 PM",
      location: "Climbing Wall"
    },
    {
      name: "Pool Lap Session",
      date: "October 30, 2025",
      time: "7:00 AM",
      location: "Aquatics Center"
    },
    {
      name: "Intramural Basketball",
      date: "November 5, 2025",
      time: "6:00 PM",
      location: "Gym Court"
    }
  ];

  const handleRSVP = (event) => {
    toast({
      title: "Success!",
      description: `You've RSVPed for ${event.name}`,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Welcome Back!</h1>

      {/* Last Visit & Capacity Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="text-msu-red h-6 w-6" />
          <h2 className="text-xl font-bold">Current Capacity</h2>
        </div>
        
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="absolute left-0 top-0 h-full capacity-moderate w-[40%]"></div>
        </div>
        
        <p className="text-center text-gray-600 mb-4">40% Occupied (~50 users now)</p>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Last Swipe-In</h3>
          <p className="text-gray-600">
            {format(lastVisit, "MMMM d, yyyy 'at' h:mm a")}
          </p>
        </div>
      </div>

      {/* Quick Equipment Status */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Equipment Snapshot</h2>
          <Link to="/equipment" className="text-msu-red text-sm hover:underline">
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {equipment.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span className={item.available ? "text-green-500" : "text-red-500"}>
                {item.available 
                  ? (item.count ? `${item.count} Available` : "Available")
                  : "Out of Stock"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Events */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
        <div className="space-y-4">
          {suggestedEvents.map((event) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-gray-600 text-sm">{event.date} at {event.time}</p>
                  <p className="text-gray-500 text-sm">{event.location}</p>
                </div>
                <Button
                  onClick={() => handleRSVP(event)}
                  variant="outline"
                  size="sm"
                >
                  RSVP
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-3">
        <Link to="/events">
          <Button className="w-full justify-between" variant="outline">
            View All Events
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link to="/feedback">
          <Button className="w-full justify-between" variant="outline">
            Submit Feedback
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
