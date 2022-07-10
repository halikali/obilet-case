import { ArrowForward } from "components/Icons/Icons.component";
import { padTo2Digits } from "helper";
import "./JourneyCard.style.scss";

const JourneyCard = ({ journeyInfo }) => {
  const departure = journeyInfo.departure.split("T")[1].slice(0, 5);
  const departureDate = journeyInfo.departure.split("T")[0];
  const duration = journeyInfo.duration.slice(0, 5);

  const calcArrival = (hour, duration) => {
    var time1 = hour.split(":");
    var time2 = duration.split(":");

    let hourSum = Number(time1[0]) + Number(time2[0]);
    let minuteSum = Number(time1[1]) + Number(time2[1]);

    if (minuteSum > 59) {
      minuteSum = Math.abs(60 - minuteSum);
      hourSum += 1;
    }

    if (hourSum > 23) {
      hourSum = Math.abs(24 - hourSum);
    }

    return `${padTo2Digits(hourSum)}:${padTo2Digits(minuteSum)}`;
  };

  const arrival = calcArrival(departure, duration);

  return (
    <div className="journey-card">
      <div className="journey-card__header">
        <div className="journey-card__info-wrapper">
          <div>
            <p className="label">kalkış</p>
            <p className="journey-date"> {departure} </p>
          </div>
          <ArrowForward className="journey-card__icon" />
          <div>
            <p className="label">varış</p>
            <p className="journey-date"> {arrival} </p>
          </div>
        </div>
        <a className="price-button" rel="noreferrer" href={`https://www.obilet.com/seferler/${journeyInfo.origin.id}-${journeyInfo.destination.id}/${departureDate}/${journeyInfo.journeyId}`} target="_blank" >{journeyInfo.price},00 TL</a>
      </div>
      <p className="route">
        {journeyInfo.origin.name} - {journeyInfo.destination.name}
      </p>
    </div>
  );
};

export default JourneyCard;
