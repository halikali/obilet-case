import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ArrowBack } from "components/Icons/Icons.component";
import { formatDay } from "helper";
import "./Header.style.scss";

const HomePageHeader = () => {
  return <header className="header"></header>;
};

const DetailPageHeader = () => {
  const { origin, destination, departureDate } = useSelector(
    (state) => state.form.data
  );

  const navigate = useNavigate();

  return (
    <header className="header">
      <ArrowBack className="header__icon" onClick={() => navigate(-1)} />
      <div className="header__info-wrapper">
        <p className="header__info">
          {origin.name} - {destination.name}
        </p>
        <p className="header__info header__info--date">
          {formatDay(departureDate)}
        </p>
      </div>
    </header>
  );
};

export { HomePageHeader, DetailPageHeader };
