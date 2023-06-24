import {
  createTRPCRouter,
  protectedProcedure,
} from "@component/server/api/trpc";
import { Plan } from "../types";
import { z } from "zod";

export const travelRouter = createTRPCRouter({
  getAllPlans: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.collabAccess.findMany({
      where: {
        accountId: ctx.session.user.id,
      },
    });
  }),
  newPlan: protectedProcedure.input(Plan).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.plan.create({
      data: {
        ...input,
        ownerId: ctx.session.user.id,
        CollabAccess: {
          create: [
            {
              accountId: ctx.session.user.id,
            },
          ],
        },
      },
    });
  }),
  getPlan: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input: id }) => {
      return await ctx.prisma.plan.findFirst({
        where: {
          id,
        },
      });
    }),
});
