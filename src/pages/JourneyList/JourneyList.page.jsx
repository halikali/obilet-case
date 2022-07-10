import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import JourneyCard from "components/JourneyCard/JourneyCard.component";
import { JourneyCardSkeleton } from "components/Skeleton/Skeleton.component";
import { DetailPageHeader } from "components/Header/Header.component";
import "./JourneyListPage.style.scss";

const JourneyListPage = () => {
  const { journey } = useSelector((state) => state.journey);
  const { destinationId, originId } = useParams();

  const sortedJourney = journey.data.data && [...journey.data.data].sort((a,b) => new Date(a.journey.departure) - new Date(b.journey.departure));

  if (!journey.isLoad) {
    return ( 
      <div className="journey-list-page">
        <DetailPageHeader />
        {Array.from({ length: 10 }).map((_, i) => (
          <JourneyCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (
    journey.isLoad &&
    journey.data.data &&
    Array.from(journey.data.data).length === 0
  ) {
    return (
      <div className="journey-list-page">
        <DetailPageHeader />
        <p className="info-message">
          Belirtilen tarihler arasında bir sefer kaydı bulunamamıştır.
        </p>
      </div>
    );
  }

  return (
    <div className="journey-list-page">
      <DetailPageHeader />
      {journey.data.status !== "Success" ? (
        <p className="info-message"> {journey.data["user-message"]} </p>
      ) : (
        sortedJourney.map((item) => (
          <JourneyCard
            key={item.id}
            journeyInfo={{
              journeyId: item.id,
              origin: { name: item.journey.origin, id: originId },
              destination: {
                name: item.journey.destination,
                id: destinationId,
              },
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
