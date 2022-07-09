import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Calendar } from "components/Icons/Icons.component";
import { formatDate, padTo2Digits } from "helper";
import { setDepartureDate } from "Slices/FormSlices";
import "./DateInput.style.scss";

const DateInput = () => {
  const [activeDay, setActiveDay] = useState("Bugün");
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    activeDay === "Bugün" ? setDate(new Date()) : setDate(tomorrow);
  }, [activeDay]);

  useLayoutEffect(() => {
    dispatch(
      setDepartureDate(
        `${date.getFullYear()}-${padTo2Digits(
          date.getMonth() + 1
        )}-${padTo2Digits(date.getDate())}`
      )
    );
  }, [date, dispatch]);

  const buttons = document.getElementsByClassName("button");

  const findActiveFilter = () => {
    const activeFilter = document.querySelector(".button--active");
    activeFilter && setActiveDay(activeFilter.innerText);
  };

  const setActiveButton = (e) => {
    Array.from(buttons).forEach((item) =>
      item.classList.remove("button--active")
    );
    e.target.classList.add("button--active");

    findActiveFilter();
  };

  return (
    <div className="selection selection--date">
      <Calendar className="selection__icon" />
      <div className="selection__text-wrapper">
        <p className="label">Tarih</p>
        <p className="text">{formatDate(date)} </p>
      </div>
      <div className="button__wrapper">
        <button className="button button--active" onClick={setActiveButton}>
          Bugün
        </button>
        <button className="button" onClick={setActiveButton}>
          Yarın
        </button>
      </div>
    </div>
  );
};

export default DateInput;
