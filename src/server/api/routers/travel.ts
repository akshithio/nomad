import {
  createTRPCRouter,
  protectedProcedure,
} from "@component/server/api/trpc";
import { Plan } from "../types";


export const travelRouter = createTRPCRouter({
  getAllPlans: protectedProcedure.query(async ({ctx}) => {
    return await ctx.prisma.plan.findMany({
      where: {
        ownerId: ctx.session.user.id
      }
    })
  }),
  newPlan: protectedProcedure.input(Plan).mutation(async ({ctx, input}) => {
    return await ctx.prisma.plan.create({
      data: {
        ...input,
        ownerId: ctx.session.user.id
      }
    })
  })
});
