export default function CardComponent() {
  return (
    <div className="relative h-[256px] w-[384px] rounded-md border-[2px] border-black">
      <div className="h-[60%] w-full"></div>
      <div className="h-[40%] w-full border-t-[2px] border-black px-2 pt-5 font-inter text-sm">
        <div className="absolute right-2 rounded-md bg-yellow-300 px-2 font-cal text-[12px]">
          In Progress
        </div>
        <svg
          className="absolute bottom-2 right-2"
          width="54"
          height="30"
          viewBox="0 0 54 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="14.5" fill="#D9D9D9" stroke="black" />
          <circle cx="26" cy="15" r="14.5" fill="#D9D9D9" stroke="black" />
          <circle cx="39" cy="15" r="14.5" fill="#D9D9D9" stroke="black" />
        </svg>

        <h1 className="absolute bottom-3 right-3 mb-[1px] mr-[2px] text-sm">
          +3
        </h1>

        <h1>From: Hyderabad</h1>
        <h1>To: New York</h1>

        <h1 className="absolute bottom-2 font-serif text-[12px]">
          June 24th - June 31st
        </h1>
      </div>
      <svg
        className="absolute left-[5%] top-[52.5%]"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="black" />
      </svg>
    </div>
  );
}
