import { Location } from "components/Icons/Icons.component";
import "./CityInput.style.scss";

const CityInput = ({ label, city }) => {
  return (
    <div className="selection">
      <Location className="selection__icon" />
      <div className="selection__text-wrapper">
        <p className="label">{label}</p>
        <p className="text"> {city}</p>
      </div>
    </div>
  );
};

export default CityInput;
