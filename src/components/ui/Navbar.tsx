import Image from "next/image";
import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

// @ts-expect-error anything
export default function Navbar(props: any) {
  const { data: sessionData } = useSession();
  console.log(sessionData);

  return (
    <div className="flex w-full items-center bg-gray-100 px-5 py-5">
      <Link href="/">
        <div className="flex items-center justify-center">
          <Image src="/logo.svg" alt="nomad logo" width={32} height={32} />
          <h1 className="ml-3 font-cal text-3xl font-bold">Nomad</h1>
        </div>
      </Link>

      <div className="absolute right-5">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button>
              <Image
                //@ts-expect-error image
                src={sessionData && sessionData.user?.image}
                alt="profile picture"
                height={36}
                width={36}
                className="rounded-full"
              />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="relative mr-[20px]" sideOffset={10}>
              <div className="w-[240px] rounded-md border-[1px] border-black bg-white font-cal shadow-md">
                <button
                  onClick={
                    sessionData
                      ? () =>
                          void signOut({
                            callbackUrl: "http://localhost:3000/",
                          })
                      : () => void signIn()
                  }
                  className="relative flex w-full items-center border-b-[1px] border-black p-3"
                >
                  <h1>Logout</h1>
                  <ExitIcon className="absolute right-10" />
                </button>
                <Dialog.Root>
                  <Dialog.Trigger className="w-full">
                    <button className="relative flex w-full items-center p-3">
                      <h1>Profile Details</h1>
                      <PersonIcon className="absolute right-10" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay rounded-md" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Title className="DialogTitle font-cal text-2xl">
                        User Details
                      </Dialog.Title>
                      <Dialog.Description className="DialogDescription">
                        All of the details regarding you that help us keep track
                        of all the journeys you embark on
                      </Dialog.Description>

                      <h1 className="mt-2">
                        <span className="font-cal">Email ID: </span>
                        {sessionData?.user?.email}
                      </h1>
                      <h1 className="mt-2">
                        <span className="font-cal">Username: </span>
                        {sessionData?.user?.name}
                      </h1>
                      <h1 className="mt-2">
                        <span className="font-cal">User ID: </span>
                        {sessionData?.user?.id}
                      </h1>

                      <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                          <Cross2Icon />
                        </button>
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}
