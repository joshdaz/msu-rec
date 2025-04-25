
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Dumbbell, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Layout({ children }) {
  const location = useLocation();
  
  const tabs = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/events", icon: Calendar, label: "Events" },
    { path: "/equipment", icon: Dumbbell, label: "Equipment" },
    { path: "/feedback", icon: MessageSquare, label: "Feedback" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full z-50">
        <div className="msu-red p-4">
          <div className="container mx-auto flex items-center justify-between">
            <img alt="Montclair State University Logo" className="h-8" src="https://images.unsplash.com/photo-1579555017675-f4afe6781138" />
            <h1 className="text-white text-lg md:text-xl font-bold">Campus Recreation</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto pt-20 pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-around">
            {tabs.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center py-3 px-4 ${
                  location.pathname === path
                    ? "text-msu-red"
                    : "text-gray-600 hover:text-msu-red"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs mt-1">{label}</span>
                {location.pathname === path && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 h-0.5 w-12 bg-msu-red"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
