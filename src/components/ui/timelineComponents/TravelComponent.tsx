interface travelInteface {
  toAirport: string;
  fromAirport: string;
  fromTime: string;
  toTime: string;
  layover: boolean;
  layoverDetails: string;
}

export default function TravelComponent(props: travelInteface) {
  return (
    <div className="right container relative flex">
      <div className="relative w-[45%] rounded-md border-[1px] px-4 py-4 shadow-md">
        <div className="absolute right-4 rounded-md bg-yellow-300 px-2 font-cal text-[12px]">
          In Progress
        </div>
        <div className="rounded-md w-fit bg-gray-300 px-2 font-cal text-[12px]">
          Travel: Departing
        </div>
        <h1 className="font-cal text-4xl mt-1">
          {props.fromAirport} &nbsp;→&nbsp; {props.toAirport}
        </h1>
        <h1 className="mt-2 font-inter text-sm text-gray-600">
          {props.fromTime} - {props.toTime}
        </h1>

        {props.layover && (
          <h1 className="font-inter text-sm text-gray-600">
            {props.layoverDetails}
          </h1>
        )}

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
