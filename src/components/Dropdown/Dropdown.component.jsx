import { useDispatch, useSelector } from "react-redux";

import { setdestination, setOrigin } from "Slices/FormSlices";
import Loader from "components/Loader/Loader.component";
import "./Dropdown.style.scss";

const Dropdown = ({ seperator }) => {
  const dispatch = useDispatch();
  const { origin, destination } = useSelector((state) => state.form.data);
  const { data } = useSelector((state) => state.journey.locationList);

  const cityList = [];
  data &&
    Array.from(data).forEach((item) =>
      cityList.push({
        id: item.id,
        name: item.name,
      })
    );

  const searchArr = cityList.filter((item) =>
    String(item.name)
      .toLowerCase()
      .includes(
        seperator === "origin"
          ? String(origin.name).toLowerCase()
          : String(destination.name).toLowerCase()
      )
  );

  const setSelected = (id, cityName) => {
    seperator === "origin"
      ? dispatch(setOrigin({ name: cityName, id }))
      : dispatch(setdestination({ name: cityName, id }));
  };

  if (!data) {
    return (
      <ul className="dropdown">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className={"dropdown__item"}>
            <Loader />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="dropdown">
      {searchArr &&
        searchArr.map((item) => (
          <li
            key={item.id}
            className={"dropdown__item"}
            onClick={(e) => setSelected(item.id, item.name)}
          >
            {item.name}
          </li>
        ))}
    </ul>
  );
};

export default Dropdown;
