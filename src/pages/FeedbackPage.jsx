
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { EventFeedbackCard } from "@/components/EventFeedbackCard";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Lightbulb, MessageCircle, AlertCircle } from "lucide-react";

export function FeedbackPage() {
  const { toast } = useToast();
  const [feedbackType, setFeedbackType] = useState("suggestion");
  const [generalFeedback, setGeneralFeedback] = useState("");

  const attendedEvents = [
    { 
      name: "Yoga for Beginners",
      date: "October 5, 2025",
      image: "yoga-class.jpg"
    },
    { 
      name: "3v3 Basketball Tournament",
      date: "October 7, 2025",
      image: "basketball.jpg"
    }
  ];

  const handleEventFeedback = (feedback) => {
    toast({
      title: "Thank you for your feedback!",
      description: `Your rating for ${feedback.event.name} has been submitted.`,
    });
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Your feedback has been submitted successfully.",
    });
    setGeneralFeedback("");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Feedback</h1>

      <Tabs defaultValue="event" className="w-full">
        <TabsList className="w-full grid grid-cols-2 mb-6">
          <TabsTrigger
            value="event"
            className="data-[state=active]:bg-msu-red data-[state=active]:text-white"
          >
            Event Feedback
          </TabsTrigger>
          <TabsTrigger
            value="general"
            className="data-[state=active]:bg-msu-red data-[state=active]:text-white"
          >
            General Suggestions
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="event" className="space-y-4">
            {attendedEvents.map((event) => (
              <EventFeedbackCard
                key={event.name}
                event={event}
                onSubmit={handleEventFeedback}
              />
            ))}
          </TabsContent>

          <TabsContent value="general">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-msu-red bg-opacity-10 rounded-full mb-2">
                  <Lightbulb className="w-8 h-8 text-msu-red" />
                </div>
                <h2 className="text-xl font-semibold">Share your ideas...</h2>
              </div>

              <form onSubmit={handleGeneralSubmit} className="space-y-6">
                <div>
                  <ToggleGroup
                    type="single"
                    value={feedbackType}
                    onValueChange={(value) => value && setFeedbackType(value)}
                    className="justify-center w-full border rounded-lg p-1"
                  >
                    <ToggleGroupItem
                      value="suggestion"
                      className="flex-1 data-[state=on]:bg-msu-red data-[state=on]:text-white"
                    >
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Suggestion
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="compliment"
                      className="flex-1 data-[state=on]:bg-msu-red data-[state=on]:text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Compliment
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="issue"
                      className="flex-1 data-[state=on]:bg-msu-red data-[state=on]:text-white"
                    >
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Issue
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <textarea
                  value={generalFeedback}
                  onChange={(e) => setGeneralFeedback(e.target.value)}
                  className="w-full p-4 border rounded-lg h-40 focus:ring-2 focus:ring-msu-red focus:border-transparent transition-shadow"
                  placeholder="Share your thoughts with us..."
                  required
                />

                <Button
                  type="submit"
                  className="fixed bottom-20 right-4 md:right-8 bg-msu-red hover:bg-msu-red/90 shadow-lg"
                  size="lg"
                >
                  Submit Feedback
                </Button>
              </form>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  );
}
