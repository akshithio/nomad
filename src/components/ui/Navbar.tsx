import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "@component/utils/api";
import Router from "next/router";

export default function Navbar(props: any) {
  const { data: sessionData } = useSession();
  console.log(sessionData);

  return (
    <div className="flex w-full items-center bg-gray-100 px-5 py-5">
      <div className="flex items-center justify-center">
        <Image src="/logo.svg" alt="nomad logo" width={32} height={32} />
        <h1 className="ml-3 font-cal text-3xl font-bold">Nomad</h1>
      </div>
      <div className="absolute right-5">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button>
              <Image
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
                  <ExitIcon className="absolute right-4" />
                </button>
                <button className="relative flex w-full items-center p-3">
                  <h1>Edit Profile</h1>
                  <PersonIcon className="absolute right-4" />
                </button>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}
