
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar as CalendarIcon, Clock } from "lucide-react";

export function EventModal({ event, isOpen, onClose, onRSVP }) {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{event.name}</DialogTitle>
          <DialogDescription className="space-y-4 pt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarIcon className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">{event.description}</p>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-end">
          <Button onClick={() => {
            onRSVP(event);
            onClose();
          }}>
            RSVP Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
