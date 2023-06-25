import {
    createTRPCRouter,
    protectedProcedure,
  } from "@component/server/api/trpc";
  import { z } from "zod";
  import { Todo } from "../types";
  
  export const todoRouter = createTRPCRouter({
    getTodos: protectedProcedure
      .input(z.string())
      .query(async ({ ctx, input }) => {
        return await ctx.prisma.todoEntry.findMany({
          where: {
            journeyId: input,
          },
        });
      }),
    newTodo: protectedProcedure
      .input(Todo)
      .mutation(async ({ ctx, input }) => {
        return await ctx.prisma.todoEntry.create({
          data: input,
        });
      }),

    markTodo: protectedProcedure.input(z.object({id: z.string(), markAs: z.boolean()})).mutation(async ({ctx, input}) => {
      return await ctx.prisma.todoEntry.update({
        where: {
          id: input.id
        },
        data: {
          completed: input.markAs
        }
      })
    })
  });