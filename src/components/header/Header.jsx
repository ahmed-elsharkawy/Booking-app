import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import Options from "./Options";
import { useNavigate } from "react-router-dom";

function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [optionsData, setOptionsData] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openOptions, setOpenOptions] = useState(false);

  const optionsHandler = (data) => {
    setOptionsData(data);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('./hotel', {state: {data: optionsData}})
  }
  return (
    <div className={type === 'list' ? "header listHeader" : "header"}>
      <div className="headerContainer">
        <div className="headerListItems">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <p>Stays</p>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <p>Flights</p>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <p>Car rentals</p>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <p>Attractions</p>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <p>Airprot taxis</p>
          </div>
        </div>
        {type !== "list" && (
        <>
        <div className="headerTitle">
          <h1>A lifetime of discounts? it's Genius.</h1>
        </div>
        <div className="headerDesc">
          Get rewarded for your travel - unlock instatnt savings of 10% or more
          with a free Booking app account.
        </div>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          <div className="searchFeild">
            <FontAwesomeIcon className="searchIcon" icon={faBed} />
            <input
              className="searchField"
              type="text"
              placeholder="Where are you going?"
            />
          </div>
          <div className="searchFeild dataField">
            <FontAwesomeIcon className="searchIcon" icon={faCalendarDays} />
            <span
              className="calender"
              onClick={() => {
                setOpenDate(!openDate);
              }}
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                className="dateRange"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>
          <div className="searchFeild">
            <FontAwesomeIcon className="searchIcon" icon={faPerson} />
            <span
              className="options"
              onClick={() => {
                setOpenOptions(!openOptions);
              }}
            >{`${optionsData.adult && optionsData.adult} adult ${
              optionsData.children && optionsData.children
            } childrn ${optionsData.room && optionsData.room} room`}</span>
            {openOptions && (
              <Options
                getData={optionsHandler}
              ></Options>
            )}
          </div>
          <button className="headerBtn" onClick={handleClick}>Search</button>
        </div>
        </>
        )}
      </div>
    </div>
  );
}

export default Header;
