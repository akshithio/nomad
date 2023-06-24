import {
  createTRPCRouter,
  protectedProcedure,
} from "@component/server/api/trpc";
import { Plan } from "../types";

export const travelRouter = createTRPCRouter({
  getAllPlans: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.collabAccess.findMany({
      where: {
        accountId: ctx.session.user.id,
      },
    });
  }),
  newPlan: protectedProcedure.input(Plan).mutation(async ({ ctx, input }) => {
    await ctx.prisma.plan.create({
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
});
