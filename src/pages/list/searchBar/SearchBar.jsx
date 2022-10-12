import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import Options from "../../../components/header/Options";
import "./searchBar.css";

function SearchBar() {
  const [openCheckinDate, setOpenCheckinDate] = useState(false);
  const [checkinDate, setCheckinDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [openCheckoutDate, setOpenCheckoutDate] = useState(false);
  const [checkoutDate, setCheckoutDate] = useState([
    {
      startDate: null,
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleCheckinDate = () => {
    setOpenCheckinDate(!openCheckinDate);
  };

  const handleCheckoutDate = () => {
    setOpenCheckoutDate(!openCheckoutDate);
  };

  const [optionsData, setOptionsData] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openOptions, setOpenOptions] = useState(false);

  const optionsHandler = (data) => {
    setOptionsData(data);
  };
  return (
    <>
      <div className="search">
        <h3>Search</h3>
        <div className="field searchField">
          <span>Destination/property name:</span>
          <input type="text" placeholder="search ..." />
        </div>
        <div className="field checkinField">
          <span>Check-in date</span>
          <p onClick={handleCheckinDate}>
            {format(checkinDate[0].startDate, "MM/dd/yyyy")}
          </p>
          {openCheckinDate && (
            <DateRange
              className="checkinDateRange"
              editableDateInputs={true}
              onChange={(item) => setCheckinDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={checkinDate}
            />
          )}
        </div>
        <div className="field checkoutField">
          <span>Check-out date</span>
          <p onClick={handleCheckoutDate}>
            {format(checkoutDate[0].endDate, "MM/dd/yyyy")}
          </p>
          {openCheckoutDate && (
            <DateRange
              className="checkinDateRange"
              editableDateInputs={true}
              onChange={(item) => setCheckoutDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={checkoutDate}
            />
          )}
        </div>
        <div className="field optionsField">
          <span>1-night stay</span>
          <p
            onClick={() => {
              setOpenOptions(!openOptions);
            }}
          >
            {`${optionsData.adult} adult ${optionsData.children} children ${optionsData.room} room`}
          </p>
          {openOptions && <Options getData={optionsHandler} page='search'></Options>}
        </div>
        <div className="field priceOptionField">
          <h4>Options</h4>
          <div className="minPrice">
            <span>Min price per night</span>
            <input type="number" min={1} />
          </div>
          <div className="maxPrice">
            <span>Max price per night</span>
            <input type="number" min={1} />
          </div>
        </div>
        <button>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
