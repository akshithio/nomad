import { z } from "zod";

export const Journey = z.object({
  name: z.string(),
  description: z.string(),
  fromLocation: z.string(),
  toLocation: z.string(),
  status: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

export const Timeline = z.object({
  title: z.string(),
  type: z.string(),
  description: z.string(),
  journeyId: z.string(),
  status: z.string(),
  fromTime: z.date(),
  toTime: z.date(),
  location: z.string(),
  phone: z.string(),
  cost: z.string(),
  layovers: z.array(z.string())
});

export const Flight = z.object({
  text: z.string(),
  journeyId: z.string(),
  flightCode: z.string(),
  name: z.string(),
  fromAirport: z.string(),
  toAirport: z.string(),
  departure: z.date(),
  arrival: z.date()
  
});

export const Todo = z.object({
  text: z.string(),
  journeyId: z.string(),
});
