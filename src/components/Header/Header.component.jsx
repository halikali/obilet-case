import { useNavigate } from "react-router-dom";

import { ArrowBack } from "components/Icons/Icons.component";
import { formatDay } from "helper";
import "./Header.style.scss";

const HomePageHeader = () => {
  return <header className="header"></header>;
};

const DetailPageHeader = ({ journey }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <ArrowBack className="header__icon" onClick={() => navigate(-1)} />
      <div className="header__info-wrapper">
        <p className="header__info">
          {journey?.origin} - {journey?.destination}
        </p>
        <p className="header__info header__info--date">
          {journey && formatDay(journey.departure?.split("T")[0])}
        </p>
      </div>
    </header>
  );
};

export { HomePageHeader, DetailPageHeader };
