import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setdestination, setOrigin } from "Slices/FormSlices";
import { Location } from "components/Icons/Icons.component";
import Dropdown from "components/Dropdown/Dropdown.component";
import "./CityInput.style.scss";

const CityInput = ({ label, city, inputName }) => {
  const [cityName, setCityName] = useState(city);
  const dispatch = useDispatch();

  const { origin, destination } = useSelector((state) => state.form.data);

  useEffect(() => {
    inputName === "origin"
      ? dispatch(setOrigin({ ...origin, name: cityName }))
      : dispatch(setdestination({ ...destination, name: cityName }));
  }, [cityName]);

  useEffect(() => {
    inputName === "origin"
      ? setCityName(origin.name)
      : setCityName(destination.name);
  }, [origin, destination]);

  const onchangeHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="selection">
      <Location className="selection__icon" />
      <div className="selection__text-wrapper">
        <p className="label">{label}</p>
        <input
          className="text input"
          placeholder="il veya ilçe adı yazın "
          type={"text"}
          onChange={(e) => onchangeHandler(e)}
          value={cityName}
        />
      </div>
      <Dropdown seperator={inputName} />
    </div>
  );
};

export default CityInput;
