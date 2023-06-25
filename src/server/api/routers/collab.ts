import {
  createTRPCRouter,
  protectedProcedure,
} from "@component/server/api/trpc";
import { z } from "zod";

export const collabRouter = createTRPCRouter({
  addCollab: protectedProcedure
    .input(z.object({ journeyId: z.string(), userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const isOwner = await ctx.prisma.collabAccess.findFirst({
        where: {
          userId: ctx.session.user.id,
          journeyId: input.journeyId,
        },
      });

      if (isOwner) {
        return await ctx.prisma.collabAccess.create({
          data: {
            journeyId: input.journeyId,
            userId: ctx.session.user.id,
          },
        });
      }
    }),
});
