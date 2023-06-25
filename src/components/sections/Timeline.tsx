import TravelComponent from "../ui/TravelComponent";
import CheckInComponent from "../ui/CheckInComponent";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="right container relative flex">
        <div className="relative w-[45%] rounded-md bg-black px-5 py-7 text-white">
          <h2>2015</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>

        <div className="absolute right-[49%] z-10 ml-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="black" />
            <path
              d="M3.84789 16.0365L6.54785 16.2629C6.94849 16.2978 7.31429 16.6636 7.35784 17.0729L7.57558 19.7642C7.74106 20.278 8.33331 20.5219 8.82104 20.278L9.93587 19.7206C10.2059 19.59 10.4323 19.2242 10.4323 18.928L10.441 16.0626C10.441 15.8536 10.563 15.5749 10.7023 15.4355L12.3136 13.8242C12.6794 13.4584 13.1236 13.5542 13.3239 14.0333L14.9874 18.2051C15.2574 18.8932 15.9193 19.0325 16.4419 18.51L17.2519 17.7C17.67 17.2819 17.8441 16.4807 17.6177 15.9232L15.6668 11.0111C15.5797 10.802 15.6493 10.5059 15.8061 10.3491L17.609 8.54625C18.2012 7.954 18.4625 6.82176 18.2099 6.02919C18.1141 5.74177 17.8964 5.52403 17.609 5.42823C16.8164 5.15823 15.6842 5.43694 15.0919 6.02919L13.289 7.83206C13.1323 7.98884 12.8274 8.0498 12.6271 7.97142L7.71493 6.02048C7.16623 5.80274 6.35624 5.96822 5.93818 6.38628L5.1282 7.19627C4.60562 7.71884 4.73626 8.37206 5.43303 8.65076L9.60491 10.3143C10.0839 10.4972 10.1797 10.9588 9.81393 11.3246L8.20267 12.9359C8.0546 13.0839 7.76719 13.1971 7.57558 13.1971L4.69272 13.171C4.39659 13.171 4.03079 13.3975 3.90015 13.6675L3.34274 14.7823C3.09016 15.2787 3.32532 15.8623 3.84789 16.0365Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="right container relative flex">
        <div className="relative w-[45%] rounded-md bg-black px-5 py-7 text-white">
          <h2>2015</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>

        <div className="absolute right-[49%] z-10 ml-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="black" />
            <path
              d="M3.84789 16.0365L6.54785 16.2629C6.94849 16.2978 7.31429 16.6636 7.35784 17.0729L7.57558 19.7642C7.74106 20.278 8.33331 20.5219 8.82104 20.278L9.93587 19.7206C10.2059 19.59 10.4323 19.2242 10.4323 18.928L10.441 16.0626C10.441 15.8536 10.563 15.5749 10.7023 15.4355L12.3136 13.8242C12.6794 13.4584 13.1236 13.5542 13.3239 14.0333L14.9874 18.2051C15.2574 18.8932 15.9193 19.0325 16.4419 18.51L17.2519 17.7C17.67 17.2819 17.8441 16.4807 17.6177 15.9232L15.6668 11.0111C15.5797 10.802 15.6493 10.5059 15.8061 10.3491L17.609 8.54625C18.2012 7.954 18.4625 6.82176 18.2099 6.02919C18.1141 5.74177 17.8964 5.52403 17.609 5.42823C16.8164 5.15823 15.6842 5.43694 15.0919 6.02919L13.289 7.83206C13.1323 7.98884 12.8274 8.0498 12.6271 7.97142L7.71493 6.02048C7.16623 5.80274 6.35624 5.96822 5.93818 6.38628L5.1282 7.19627C4.60562 7.71884 4.73626 8.37206 5.43303 8.65076L9.60491 10.3143C10.0839 10.4972 10.1797 10.9588 9.81393 11.3246L8.20267 12.9359C8.0546 13.0839 7.76719 13.1971 7.57558 13.1971L4.69272 13.171C4.39659 13.171 4.03079 13.3975 3.90015 13.6675L3.34274 14.7823C3.09016 15.2787 3.32532 15.8623 3.84789 16.0365Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <CheckInComponent
        fromAirport="HYD"
        toAirport="JFK"
        fromTime="Jun 24 18:30 (IST)"
        toTime="Jun 25 22:00 (ET)"
        layover
        layoverDetails="Layovers: Istanbul (4 Hours)"
      />
      <TravelComponent
        fromAirport="HYD"
        toAirport="JFK"
        fromTime="Jun 24 18:30 (IST)"
        toTime="Jun 25 22:00 (ET)"
        layover
        layoverDetails="Layovers: Istanbul (4 Hours)"
      />
    </div>
  );
}
