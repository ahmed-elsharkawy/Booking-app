import { useNavigate } from "react-router-dom";
import "./recommended.css";
import data from "./data.json";

function Recommended() {
  const navigate = useNavigate();
  const handleNewPage = () => {
    navigate("./hotel");
  };
  return (
    <div className="recommended">
      <div className="recommendedContainer">
        <h3>Homes guests love</h3>
        <div className="recommendedItems">
          {data.items &&
            data.items.map((item, index) => {
              return (
                <div key={index} onClick={handleNewPage} className="recommendedItem">
                  <img
                    src={item.img}
                    alt="house"
                  />
                  <div className="recommendedItemContent">
                    <p className="title">{item.title}</p>
                    <p className="country">{item.country}</p>
                    <p className="price">{item.price}</p>
                    <div className="rating">
                      <span className="mark">{item.mark}</span>
                      <span className="grade">{item.grade}</span>
                      <span className="numReview">{item.numReviews}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Recommended;
