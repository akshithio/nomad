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
});

export const Todo = z.object({
  text: z.string(),
  journeyId: z.string(),
});
