import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CityInput from "components/Inputs/CityInput/CityInput.component";
import DateInput from "components/Inputs/DateInput/DateInput.component";
import Modal from "components/Modal/Modal.component";
import {
  fetchJourney,
  fetchLocations,
  startSession,
} from "Slices/JourneySlice";
import { HomePageHeader } from "components/Header/Header.component";
import { changeValues } from "Slices/FormSlices";
import { Switch } from "components/Icons/Icons.component";
import "./HomePage.style.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { origin, destination, departureDate } = useSelector(
    (state) => state.form.data
  );

  useEffect(() => {
    sessionStorage.getItem("sessionStatus") !== "Success" &&
      dispatch(startSession());
    !sessionStorage.getItem("locationList") && dispatch(fetchLocations());
  });

  const switchInputValues = () => {
    dispatch(changeValues());
  };

  const findJourney = () => {
    if (
      origin.name === destination.name ||
      new Date(departureDate).setHours(0, 0, 0, 0) <
        new Date().setHours(0, 0, 0, 0)
    ) {
      setIsModalOpen(true);
      return false;
    }
    navigate(`/seferler/${origin.id}-${destination.id}/${departureDate}`);
  };

  return (
    <div className="homepage">
      <HomePageHeader />
      <Modal style={{ display: isModalOpen ? "flex" : "none" }}>
        <span className="close" onClick={() => setIsModalOpen(false)}>
          &#10005;
        </span>
        {origin.name === destination.name && (
          <p>Kalkış ve varış noktaları aynı olamaz </p>
        )}
        {new Date(departureDate).setHours(0, 0, 0, 0) <
          new Date().setHours(0, 0, 0, 0) && (
          <p>Kalkış tarihi bugünden daha eski olamaz</p>
        )}
      </Modal>
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
