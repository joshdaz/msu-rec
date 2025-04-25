
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

export function FeedbackSection() {
  const { toast } = useToast();
  const [feedbackType, setFeedbackType] = useState("suggestion");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Your feedback has been submitted successfully.",
    });
    e.target.reset();
  };

  return (
    <section id="feedback">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>

        <Tabs defaultValue="event" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="event">Event Feedback</TabsTrigger>
            <TabsTrigger value="general">General Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="event" className="mt-6">
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Event</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Choose an event you attended</option>
                  <option value="yoga">Yoga for Beginners - Oct 5</option>
                  <option value="basketball">3v3 Basketball Tournament - Oct 7</option>
                  <option value="soccer">Intramural Soccer - Oct 10</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="5">Excellent (5/5)</option>
                  <option value="4">Very Good (4/5)</option>
                  <option value="3">Good (3/5)</option>
                  <option value="2">Fair (2/5)</option>
                  <option value="1">Poor (1/5)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Your Comments</label>
                <textarea
                  required
                  className="w-full p-2 border rounded-md h-32"
                  placeholder="What did you think about the event?"
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Event Feedback
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="general" className="mt-6">
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name (Optional)</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email (Optional)</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Feedback Type</label>
                <select
                  value={feedbackType}
                  onChange={(e) => setFeedbackType(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="suggestion">Suggestion</option>
                  <option value="compliment">Compliment</option>
                  <option value="issue">Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Your Suggestion</label>
                <textarea
                  required
                  className="w-full p-2 border rounded-md h-32"
                  placeholder="Share your ideas for improvement..."
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Suggestion
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
