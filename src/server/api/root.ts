import { travelRouter } from "@component/server/api/routers/travel";
import { createTRPCRouter } from "@component/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  travel: travelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
