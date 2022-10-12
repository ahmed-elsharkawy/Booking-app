import { useNavigate } from "react-router-dom";
import "./searchResult.css";
import data from "./data.json";

function SearchResult() {
  const navigate = useNavigate();
  const handleOpenOneHotel = (id) => {
    navigate(`/hotel/${id}`);
  };
  return (
    <div className="searchResult">
      <div className="resultContainer">
        {data.items &&
          data.items.map((item, index) => {
            return (
              <div key={index} className="section">
                <div className="img">
                  <img
                    onClick={() => handleOpenOneHotel(index +1)}
                    src={item.img}
                    alt="hotel"
                  />
                </div>
                <div className="data">
                  <h3 onClick={() => handleOpenOneHotel(index + 1)}>{item.title}</h3>
                  <p className="distance">{item.distance}</p>
                  <p className="gift">{item.gift}</p>
                  <p className="facilities">{item.facilities}</p>
                  <p className="disc">{item.disc}</p>
                  <p className="cansleOption">{item.cancleOption}</p>
                  <p className="cansleOptionDisc">{item.cancleOptionDisc}</p>
                </div>
                <div className="advData">
                  <div className="grade" onClick={() => handleOpenOneHotel(index +1)}>
                    <p>{item.grade}</p>
                    <button>{item.mark}</button>
                  </div>
                  <div className="price">
                    <p className="money">{item.price}</p>
                    <p className="taxes">{item.taxes}</p>
                    <button onClick={() => handleOpenOneHotel(index +1)}>
                      See availability
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchResult;
