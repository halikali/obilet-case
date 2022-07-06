import { Calendar } from "components/Icons/Icons.component";
import { useState } from "react";

import "./DateInput.style.scss";

const DateInput = () => {
  const [active, setActive] = useState("Bugün");
  const date = new Date();
  const buttons = document.getElementsByClassName("button");

  const findActiveFilter = () => {
    const activeFilter = document.querySelector(".button--active");
    activeFilter && setActive(activeFilter.innerText);
  };

  const setActiveButton = (e) => {
    Array.from(buttons).forEach((item) =>
      item.classList.remove("button--active")
    );
    e.target.classList.add("button--active");

    findActiveFilter();
  };

  const setDate = () => {
    console.log(date);
  };

  setDate();

  return (
    <div className="selection selection--date">
      <Calendar className="selection__icon" />
      <div className="selection__text-wrapper">
        <p className="label">Tarih</p>
        <p className="text">1 Nisan 2018 Pazar</p>
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
