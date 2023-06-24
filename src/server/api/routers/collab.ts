  import {
    createTRPCRouter,
    protectedProcedure,
  } from "@component/server/api/trpc";
import { z } from "zod";
  
  export const collabRouter = createTRPCRouter({
    addCollab: protectedProcedure.input(z.object({ planId: z.string(), userId: z.string()})).mutation(async ({ctx, input}) => {

        const isOwner = await ctx.prisma.collabAccess.findFirst({
            where: {
                userId: ctx.session.user.id,
                planId: input.planId
            }
        })

        if(isOwner){
            return await ctx.prisma.collabAccess.create({
                data: {
                    planId: input.planId,
                    userId: ctx.session.user.id
                }
            })
        }
        
    })
  });
  