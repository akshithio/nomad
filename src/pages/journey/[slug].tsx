import Head from "next/head";
import "cal-sans";
import Navbar from "@component/components/ui/Navbar";
import * as Tabs from "@radix-ui/react-tabs";
import { useSession } from "next-auth/react";
import { api } from "@component/utils/api";
import { useRouter } from "next/router";
import Timeline from "@component/components/sections/Timeline";

export default function JourneySlug() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  const { data: timeline } = api.timeline.getTimeline.useQuery(
    router.query.slug as string,
    { enabled: sessionData?.user !== undefined }
  );

  const { mutate: timelineCardMutate } =
    api.timeline.newTimelineCard.useMutation();

  const { data: todo } = api.todo.getTodos.useQuery(
    router.query.slug as string,
    { enabled: sessionData?.user !== undefined }
  );

  const { mutate: todoAdd } = api.todo.newTodo.useMutation();

  return (
    <>
      <Head>
        <title>Nomad</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-screen flex-col overflow-x-clip">
        <Navbar />
        <div>
          <Tabs.Root defaultValue="overview">
            <Tabs.List className="ml-4 mt-4 w-fit rounded-md bg-gray-100 px-4 py-2 font-cal text-xl text-gray-500">
              <Tabs.Trigger value="timeline">Overview</Tabs.Trigger>
              <Tabs.Trigger value="timeline" className="ml-4">
                Timeline
              </Tabs.Trigger>
              <Tabs.Trigger value="share" className="ml-4">
                Share
              </Tabs.Trigger>
              <Tabs.Trigger value="todos" className="ml-4">
                Todos
              </Tabs.Trigger>
              <Tabs.Trigger value="misc" className="ml-4">
                Docs & Misc
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="overview">Overview Goes Here</Tabs.Content>
            <Tabs.Content value="timeline">
              {/* {JSON.stringify(timeline)}
              <button
                onClick={() => {
                  timelineCardMutate({
                    title: "Eiffel tower",
                    type: "on_going",
                    description: "My summer vacation travel plan",
                    journeyId: String(router.query.slug),
                  });
                }}
              >
                Add info [ test ]
              </button> */}
              <div className="m-8">
                <h1 className=" font-cal text-4xl">
                  Here&apos;s how things are lined up, {sessionData?.user?.name}
                </h1>
                <div className="mt-16 w-full">
                  <Timeline />
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="share">Share Goes Here</Tabs.Content>
            <Tabs.Content value="todos">
              {JSON.stringify(todo)}
              <button
                onClick={() => {
                  todoAdd({
                    text: "my todo card 1",
                    journeyId: String(router.query.slug),
                  });
                }}
              >
                Add info [ test ]
              </button>
            </Tabs.Content>
            <Tabs.Content value="misc">Misc Goes Here</Tabs.Content>
          </Tabs.Root>
        </div>
      </main>
    </>
  );
}
