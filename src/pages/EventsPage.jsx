
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventModal } from "@/components/EventModal";
import { useToast } from "@/components/ui/use-toast";

export function EventsPage() {
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [myEvents, setMyEvents] = useState([
    {
      name: "Yoga for Beginners",
      date: "October 5, 2025",
      time: "6:00 PM",
      location: "Studio 2",
      description: "Perfect for beginners! Learn the basics of yoga in a welcoming environment."
    }
  ]);

  const upcomingEvents = [
    {
      name: "3v3 Basketball Tournament",
      date: "October 7, 2025",
      time: "4:00 PM",
      location: "Gym Court",
      description: "Join our exciting 3v3 basketball tournament! Form your team and compete for prizes."
    },
    {
      name: "Intramural Soccer",
      date: "October 10, 2025",
      time: "7:00 PM",
      location: "Field",
      description: "Weekly intramural soccer games. All skill levels welcome!"
    },
    {
      name: "Rock Climbing Basics",
      date: "October 12, 2025",
      time: "5:00 PM",
      location: "Climbing Wall",
      description: "Learn the fundamentals of rock climbing with our experienced instructors."
    }
  ];

  const handleRSVP = (event) => {
    if (!myEvents.find(e => e.name === event.name)) {
      setMyEvents([...myEvents, event]);
      toast({
        title: "Success!",
        description: `You've RSVPed for ${event.name}`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Events</h1>

      {/* My RSVPs */}
      {myEvents.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">My RSVPs</h2>
          <div className="space-y-4">
            {myEvents.map((event) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-4"
              >
                <h3 className="font-semibold">{event.name}</h3>
                <p className="text-gray-600 text-sm">{event.date} at {event.time}</p>
                <p className="text-gray-500 text-sm">{event.location}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Available Events */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Available Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow p-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-gray-600 text-sm">{event.date} at {event.time}</p>
                  <p className="text-gray-500 text-sm">{event.location}</p>
                </div>
                <Button
                  onClick={() => setSelectedEvent(event)}
                  variant="outline"
                  size="sm"
                >
                  Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRSVP={handleRSVP}
      />
    </div>
  );
}
