import {
  createTRPCRouter,
  protectedProcedure,
} from "@component/server/api/trpc";

export const travelRouter = createTRPCRouter({
  getAllPlans: protectedProcedure.query(({ctx}) => {
    return ctx.prisma.plan.findMany({
      where: {
        ownerId: ctx.session.user.id
      }
    })
  }),
});
