import { z } from "zod";

export const Plan = z.object({
  name: z.string(),
  description: z.string(),
  location: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});
