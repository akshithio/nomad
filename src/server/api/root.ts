import { journeyRouter } from "@component/server/api/routers/journey";
import { createTRPCRouter } from "@component/server/api/trpc";
import { collabRouter } from "./routers/collab";
import { timelineRouter } from "./routers/timeline";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  journey: journeyRouter,
  timeline: timelineRouter,
  collab: collabRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
