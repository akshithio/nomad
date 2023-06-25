export default function MeetComponent(props) {
  return (
    <div className="right container relative flex w-[50%]">
      <div className="relative w-full rounded-md border-[1px] px-4 py-4 shadow-md">
        <div className="absolute right-4 rounded-md bg-red-300 px-2 font-cal text-[12px]">
          Yet to Happen
        </div>
        <div className="w-fit rounded-md bg-gray-300 px-2 font-cal text-[12px]">
          Meet People
        </div>
        <h1 className="mt-1 font-cal text-4xl">{props.title}</h1>
        <h1 className="font-inter text-sm text-gray-600">{props.fromTime}</h1>
        <div className="mt-4 flex">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_114_3358)">
              <path
                d="M13.7466 5.63332C13.0466 2.55332 10.3599 1.16666 7.99994 1.16666C7.99994 1.16666 7.99994 1.16666 7.99327 1.16666C5.63994 1.16666 2.94661 2.54666 2.24661 5.62666C1.46661 9.06666 3.57328 11.98 5.47994 13.8133C6.18661 14.4933 7.09327 14.8333 7.99994 14.8333C8.90661 14.8333 9.81328 14.4933 10.5133 13.8133C12.4199 11.98 14.5266 9.07332 13.7466 5.63332ZM7.99994 8.97332C6.83994 8.97332 5.89994 8.03332 5.89994 6.87332C5.89994 5.71332 6.83994 4.77332 7.99994 4.77332C9.15994 4.77332 10.0999 5.71332 10.0999 6.87332C10.0999 8.03332 9.15994 8.97332 7.99994 8.97332Z"
                fill="#718096"
              />
            </g>
            <defs>
              <clipPath id="clip0_114_3358">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="ml-1 font-inter text-sm text-gray-600">
            {props.address}
          </h1>
        </div>

        <h1 className="mt-3 w-[80%] font-inter text-sm text-gray-600">
         {props.description}
        </h1>

        <svg
          className="absolute bottom-2 right-2"
          width="54"
          height="30"
          viewBox="0 0 54 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="12" fill="#D9D9D9" stroke="black" />
          <circle cx="26" cy="15" r="12" fill="#D9D9D9" stroke="black" />
          <circle cx="39" cy="15" r="12" fill="#D9D9D9" stroke="black" />
        </svg>
        <h1 className="absolute bottom-3 right-3 mb-[1px] mr-[2px] text-sm">
          +3
        </h1>
      </div>
    </div>
  );
}
