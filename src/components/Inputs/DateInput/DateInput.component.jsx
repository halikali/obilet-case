import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Calendar } from "components/Icons/Icons.component";
import { formatDate, padTo2Digits } from "helper";
import { setDepartureDate } from "Slices/FormSlices";
import "./DateInput.style.scss";

const DateInput = () => {
  const [activeDay, setActiveDay] = useState("Yarın");
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

  const removeActiveClass = () => {
    Array.from(buttons).forEach((item) =>
      item.classList.remove("button--active")
    );
  };
  const setActiveButton = (e) => {
    removeActiveClass();
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
      <div className="datepicker-wrapper">
        <DatePicker selected={date} onChange={(date) => setDate(date)} onSelect={() => removeActiveClass()}/>
      </div>
      <div className="button__wrapper">
        <button className="button " onClick={setActiveButton}>
          Bugün
        </button>
        <button className="button button--active" onClick={setActiveButton}>
          Yarın
        </button>
      </div>
    </div>
  );
};

export default DateInput;
