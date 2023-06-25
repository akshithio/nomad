import {
  createTRPCRouter,
  protectedProcedure,
} from "@component/server/api/trpc";
import { Journey } from "../types";
import { z } from "zod";

export const journeyRouter = createTRPCRouter({
  getAllPlans: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.collabAccess.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        journey: true,
      },
    });
  }),
  newPlan: protectedProcedure
    .input(Journey)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.journey.create({
        data: {
          ...input,
          image: Math.floor(Math.random() * 5),
          ownerId: ctx.session.user.id,
          CollabAccess: {
            create: [
              {
                userId: ctx.session.user.id,
                owner: true,
              },
            ],
          },
        },
      });
    }),
  getPlan: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input: id }) => {
      // make sure user has access
      return await ctx.prisma.journey.findFirst({
        where: {
          id,
        },
      });
    }),
});
