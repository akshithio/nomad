import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex w-full items-center bg-gray-100 px-5 py-5">
      <div className="flex items-center justify-center">
        <Image src="/logo.svg" alt="nomad logo" width={32} height={32} />
        <h1 className="ml-3 font-cal text-3xl font-bold">Nomad</h1>
      </div>

      <div className="absolute right-5">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="black" />
        </svg>
      </div>
    </div>
  );
}
