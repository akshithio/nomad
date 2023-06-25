import {
  createTRPCRouter,
  protectedProcedure,
} from "@component/server/api/trpc";
import { z } from "zod";
import { Timeline } from "../types";


export const timelineRouter = createTRPCRouter({
  getTimeline: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.timelineCard.findMany({
        where: {
          journeyId: input,
        },
      });
    }),
  newTimelineCard: protectedProcedure
    .input(Timeline)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.timelineCard.create({
        data: {
          ...input,
        },
      });
    }),
});
