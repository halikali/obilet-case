import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CityInput from "components/Inputs/CityInput/CityInput.component";
import DateInput from "components/Inputs/DateInput/DateInput.component";
import { fetchJourney, fetchLocations } from "Slices/JourneySlice";
import { HomePageHeader } from "components/Header/Header.component";
import { changeValues } from "Slices/FormSlices";
import { Switch } from "components/Icons/Icons.component";
import "./HomePage.style.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { origin, destination, departureDate } = useSelector(
    (state) => state.form.data
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/startSession")
      .then(() => dispatch(fetchLocations()));
  });

  const switchInputValues = () => {
    dispatch(changeValues());
  };

  const findJourney = () => {
    if (origin.name === destination.name) {
      alert("Kalkış ve varış noktalaın aynı olamaz");
      return false;
    }

    dispatch(fetchJourney({ origin, destination, departureDate }));
    navigate(`/seferler/${origin.id}-${destination.id}/${departureDate}`);
  };

  return (
    <div className="homepage">
      <HomePageHeader />
      <div className="content">
        <div className="selection__city-areas-wrapper">
          <CityInput label={"Nereden"} city="İzmir" inputName={"origin"} />
          <CityInput label={"Nereye"} city="Ankara" inputName={"destination"} />
          <Switch className="icon" onClick={() => switchInputValues()} />
        </div>
        <DateInput />
        <button className="find-button" onClick={findJourney}>
          Bileti Bul
        </button>
      </div>
      <div className="seo-desc__wrapper">
        <p className="seo-desc__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blan
        </p>
      </div>
    </div>
  );
};

export default HomePage;
