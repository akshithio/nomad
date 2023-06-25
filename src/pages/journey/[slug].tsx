import Head from "next/head";
import "cal-sans";
import Navbar from "@component/components/ui/Navbar";
import * as Tabs from "@radix-ui/react-tabs";
import { useSession } from "next-auth/react";
import { api } from "@component/utils/api";
import { useRouter } from "next/router";
import Timeline from "@component/components/sections/Timeline";
import InputModal from "@component/components/ui/modals/InputModal";
import Home from "@component/components/sections/Home";

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
        <div className="overflow-x-clip">
          <Tabs.Root defaultValue="home">
            <Tabs.List className="ml-4 mt-4 w-fit rounded-md bg-gray-100 px-4 py-2 font-cal text-xl text-gray-500">
              <Tabs.Trigger className="TabsTrigger" value="home">
                Home
              </Tabs.Trigger>
              <Tabs.Trigger value="timeline" className="TabsTrigger ml-4">
                Timeline
              </Tabs.Trigger>
              <Tabs.Trigger value="misc" className="TabsTrigger ml-4">
                Docs & Misc
              </Tabs.Trigger>
              <Tabs.Trigger
                value="delete"
                className="TabsTriggerSpecial ml-4 text-red-600"
              >
                Delete
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="home">
              <div className="m-8">
                <Home />
              </div>
              {/* {JSON.stringify(todo)} */}
            </Tabs.Content>
            <Tabs.Content value="timeline" className="overflow-x-clip">
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
              </button> */}
              <div className="m-8">
                <div className="relative flex w-[95vw] items-center">
                  <h1 className=" font-cal text-4xl">
                    Here&apos;s how things are lined up,{" "}
                    {sessionData?.user?.name}
                  </h1>
                  <InputModal />
                </div>

                <div className="mt-16 w-full">
                  <Timeline />
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="misc">Misc Goes Here</Tabs.Content>
          </Tabs.Root>
        </div>
      </main>
    </>
  );
}
