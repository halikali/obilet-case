import { Navigate, useHistory, useNavigate } from "react-router-dom";

import JourneyCard from "components/JourneyCard/JourneyCard.component";
import { ArrowBack } from "components/Icons/Icons.component";

import "./JourneyListPage.style.scss";

const JourneyListPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="journey-list-page">
      <div className="header">
        <ArrowBack className="header__icon" onClick={() => goBack()} />
        <div className="header__info-wrapper">
          <p className="header__info">İstanbul Avrupa - Ankara</p>
          <p className="header__info header__info--date">25 Ekim Perşembe</p>
        </div>
      </div>

      {Array.from({ length: 10 }).map((item, i) => (
        <JourneyCard key={i} />
      ))}
    </div>
  );
};

export default JourneyListPage;
