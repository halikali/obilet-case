import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import JourneyCard from "components/JourneyCard/JourneyCard.component";
import { ArrowBack } from "components/Icons/Icons.component";
import { formatDay } from "helper";
import { JourneyCardSkeleton } from "components/Skeleton/Skeleton.component";
import "./JourneyListPage.style.scss";

const JourneyListPage = () => {
  const navigate = useNavigate();
  const { origin, destination, departureDate } = useSelector(
    (state) => state.form.data
  );

  const { journey } = useSelector((state) => state.journey);

  const goBack = () => {
    navigate(-1);
  };

  if (!journey.isLoad) {
    return (
      <div className="journey-list-page">
        <div className="header">
          <ArrowBack className="header__icon" onClick={() => goBack()} />
          <div className="header__info-wrapper">
            <p className="header__info">
              {origin.name} - {destination.name}
            </p>
            <p className="header__info header__info--date">
              {formatDay(departureDate)}
            </p>
          </div>
        </div>
        {Array.from({ length: 10 }).map((_, i) => (
          <JourneyCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (journey.isLoad && Array.from(journey.data.data).length === 0) {
    return (
      <div className="journey-list-page">
        <div className="header">
          <ArrowBack className="header__icon" onClick={() => goBack()} />
          <div className="header__info-wrapper">
            <p className="header__info">
              {origin.name} - {destination.name}
            </p>
            <p className="header__info header__info--date">
              {formatDay(departureDate)}
            </p>
          </div>
        </div>
        <p className="info-message">
          Belirtilen tarihler arasında bir sefer kaydı bulunamamıştır.
        </p>
      </div>
    );
  }

  return (
    <div className="journey-list-page">
      <div className="header">
        <ArrowBack className="header__icon" onClick={() => goBack()} />
        <div className="header__info-wrapper">
          <p className="header__info">
            {origin.name} - {destination.name}
          </p>
          <p className="header__info header__info--date">
            {formatDay(departureDate)}
          </p>
        </div>
      </div>
      {journey.data.status !== "Success" ? (
        <p className="info-message"> {journey.data["user-message"]} </p>
      ) : (
        Array.from(journey.data.data).map((item) => (
          <JourneyCard
            key={item.id}
            journeyInfo={{
              origin: item.journey.origin,
              destination: item.journey.destination,
              price: item.journey["original-price"],
              departure: item.journey.departure,
              duration: item.journey.duration,
            }}
          />
        ))
      )}
    </div>
  );
};

export default JourneyListPage;
