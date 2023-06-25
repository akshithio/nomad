export default function ShoppingComponent(props) {
  return (
    <div className="right container relative flex w-[50%]">
      <div className="relative w-full rounded-md border-[1px] px-4 py-4 shadow-md">
        <div className="absolute right-4 rounded-md bg-red-300 px-2 font-cal text-[12px]">
          Yet to Happen
        </div>
        <div className="w-fit rounded-md bg-gray-300 px-2 font-cal text-[12px]">
          Shopping
        </div>
        <h1 className="mt-1 font-cal text-4xl">{props.title}</h1>
        <h1 className="font-inter text-sm text-gray-600"></h1>

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
          <circle cx="39" cy="15" r="12" fill="#D9D9D9" stroke="black" />
        </svg>
      </div>
    </div>
  );
}
