import TravelComponent from "../ui/timelineComponents/TravelComponent";
import CheckInComponent from "../ui/timelineComponents/CheckInComponent";
import MeetComponent from "../ui/timelineComponents/MeetComponent";
import MonumentComponent from "../ui/timelineComponents/MonumentComponent";
import ShoppingComponent from "../ui/timelineComponents/ShoppingComponent";
import SportsComponent from "../ui/timelineComponents/SportsComponent";
export default function Timeline() {
  return (
    <div className="timeline">
      {/* TODO: add a button that sends you to the buttom of the page */}
      <SportsComponent
        description="Who said I can't climb buildings? Hiking by da cityy timeeee 🏔️"
        title="Climbing Empire State 💀"
        fromTime="Jun 27 14:00 (ET)"
        sttus="inProgress"
      />
      <ShoppingComponent
        description="Go to Chinatown and get some souvenirs, chocolates and the likes for
          the nephews."
        title="Gifts for da nephews"
        fromTime="Jun 27 08:00 (ET)"
        status="yetToHappen"
      />
      <MonumentComponent
        description=" Pick up some frends and see this 200 old year statue for the first
          time :)"
        title="Statue of Liberty Timee 🗽"
        fromTime="Jun 26 16:00 (ET)"
        status="expired"
      />
      <MeetComponent
        address="136 W 42nd St, New York, NY 10036, United States"
        description=" Meet at the cool place that we used to hangout before and catchup with
          a couple things, also make sure to get the bill :)"
        title="wit da boisss"
        fromTime="Jun 26 08:00 (ET)"
        status="yetToHappen"
      />
      <CheckInComponent
        status="completed"
        title="Hilton Check-In"
        fromTime="Jun 25 23:00 (ET)"
        address="136 W 42nd St, New York, NY 10036, United States"
        phone="+1 212-840-9600"
        price={75}
        type="in"
        status="completed"
      />
      <TravelComponent
        fromAirport="HYD"
        toAirport="JFK"
        fromTime="Jun 24 18:30 (IST)"
        toTime="Jun 25 22:00 (ET)"
        layover
        layoverDetails="Layovers: Istanbul (4 Hours)"
        status="inProgress"
        type="Departing"
      />
            <CheckInComponent
        status="completed"
        title="Hilton Check-In"
        fromTime="Jun 25 23:00 (ET)"
        address="136 W 42nd St, New York, NY 10036, United States"
        phone="+1 212-840-9600"
        price={75}
        type="in"
        status="completed"
      />
    </div>
  );
}
