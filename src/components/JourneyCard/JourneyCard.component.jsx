import { ArrowForward } from "components/Icons/Icons.component";
import "./JourneyCard.style.scss";

const JourneyCard = () => {
  return (
    <div className="journey-card">
      <div className="journey-card__header">
        <div className="journey-card__info-wrapper">
          <div>
            <p className="label">kalkış</p>
            <p className="journey-date">09:30</p>
          </div>
          <ArrowForward className="journey-card__icon" />
          <div>
            <p className="label">varış</p>
            <p className="journey-date">15:30</p>
          </div>
        </div>
        <button className="price-button">75,00 TL</button>
      </div>
      <p className="route">Esenler Otogarı - Ankara Aşti Otogarı</p>
    </div>
  );
};

export default JourneyCard;
