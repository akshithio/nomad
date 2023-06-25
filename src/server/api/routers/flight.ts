import {
    createTRPCRouter,
    protectedProcedure,
  } from "@component/server/api/trpc";
  import { z } from "zod";
  import { Flight } from "../types";
  
  export const flightRouter = createTRPCRouter({
    getFlight: protectedProcedure
      .input(z.string())
      .query(async ({ ctx, input }) => {
        return await ctx.prisma.trackedFlight.findMany({
          where: {
            journeyId: input,
          },
        });
      }),
    newFlight: protectedProcedure.input(Flight).mutation(async ({ ctx, input }) => {
      return await ctx.prisma.trackedFlight.create({
        data: input, 
      });
    }),
  });
  