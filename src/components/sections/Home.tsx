import TodoCard from "@component/components/ui/TodoCard";
import TodoList from "@component/components/ui/TodoList";
import * as Dialog from "@radix-ui/react-dialog";
import { api } from "@component/utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  const [newUserId, setNewUserId] = useState("");

  const { data: todo } = api.todo.getTodos.useQuery(
    router.query.slug as string,
    { enabled: sessionData?.user !== undefined }
  );

  const { mutate: addCollab } = api.collab.addCollab.useMutation();

  return (
    <div>
      <h1 className=" font-cal text-6xl">Hyderabad &nbsp;→&nbsp; New York</h1>
      <div className="mt-4 w-full border-[1px] border-solid border-black" />
      <div className="flex">
        <div className="mt-8 h-[75vh] w-[65vw] rounded-md border-[1px] border-solid border-black"></div>
        <div>
          <div className="ml-8 mt-8 h-[55vh] w-[31vw] rounded-md border-[1px] border-solid border-black p-4">
            <h1 className="font-cal text-3xl ">Todos</h1>

            <button
              onClick={() => {
                todoAdd({
                  text: "my todo card 1",
                  journeyId: String(router.query.slug),
                });
              }}
            >
              <TodoList
                list={[
                  { content: "First task", sourceComplete: false },
                  { content: "First task", sourceComplete: false },
                ]}
              />
            </button>
          </div>
          <div className="ml-8 mt-8 h-[17.5vh] w-[31vw] rounded-md border-[1px] border-solid border-black p-4">
            <h1 className="font-cal text-3xl ">Share</h1>
            <div className="mt-3 flex w-full flex-col items-center">
              <Dialog.Root>
                <Dialog.Trigger>
                  <button className="rounded-md bg-blue-400 px-5 py-1 font-cal text-2xl hover:cursor-pointer">
                    Share
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="DialogOverlay rounded-md" />
                  <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle font-cal text-2xl">
                      Share Journey
                    </Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                      Add someone to your journey to allow them to edit your
                      timeline, documents & todos together.
                    </Dialog.Description>
                    <Dialog.Description className="DialogDescription">
                      User ID can be obtained from Profile Picture &gt; Edit
                      Profile &gt; Copy ID
                    </Dialog.Description>
                    <fieldset className="Fieldset">
                      <label className="Label ml-[-2rem]" htmlFor="username">
                        User ID:
                      </label>
                      <input
                        className="Input"
                        id="username"
                        value={newUserId}
                        onChange={(i) => setNewUserId(i.currentTarget.value)}
                      />
                    </fieldset>
                    <div
                      style={{
                        display: "flex",
                        marginTop: 25,
                        justifyContent: "flex-end",
                      }}
                    >
                      <Dialog.Close asChild>
                        <button
                          className="border-2 border-solid border-black px-2 py-1 font-cal"
                          onClick={() => {
                            addCollab({
                              userId: newUserId,
                              journeyId: router.query.slug as string,
                            });
                          }}
                        >
                          Save changes
                        </button>
                      </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                      <button className="IconButton" aria-label="Close">
                        <Cross2Icon />
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <h1 className="mt-4 w-[55%] text-center font-inter text-xl">
                Travelling is done better together, invite your friends to plan
                your trip together
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
