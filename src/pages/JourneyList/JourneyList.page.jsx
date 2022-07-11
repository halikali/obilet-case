import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import JourneyCard from "components/JourneyCard/JourneyCard.component";
import Modal from "components/Modal/Modal.component";
import { JourneyCardSkeleton } from "components/Skeleton/Skeleton.component";
import { DetailPageHeader } from "components/Header/Header.component";
import { fetchJourney } from "Slices/JourneySlice";
import "./JourneyListPage.style.scss";

const JourneyListPage = () => {
  const { journey } = useSelector((state) => state.journey);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { destinationId, originId, departureDate } = useParams();

  const sortedJourney =
    journey.data.data &&
    [...journey.data.data].sort(
      (a, b) => new Date(a.journey.departure) - new Date(b.journey.departure)
    );

  useEffect(() => {
    dispatch(fetchJourney({ originId, destinationId, departureDate }));
  }, []);

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

  if (journey.data.status === "DeviceSessionError") {
    setTimeout(() => {
      navigate(-1);
    }, 5000);
    return (
      <>
        <DetailPageHeader />
        <Modal>
          <p className="info-message"> {journey.data["user-message"]} </p>
          <p className="info-message">
            5 saniye içerisinde ana sayfaya yönlendirileceksiniz.
          </p>
        </Modal>
      </>
    );
  }

  return (
    <div className="journey-list-page">
      <DetailPageHeader
        journey={{
          origin: journey.data.data[0]["origin-location"],
          destination: journey.data.data[0]["destination-location"],
          departure: journey.data.data[0].journey.departure,
        }}
      />
      {journey.data.status === "Success" &&
        sortedJourney &&
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
        ))}
    </div>
  );
};

export default JourneyListPage;
