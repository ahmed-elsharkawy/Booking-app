import { useNavigate } from "react-router-dom";
import "./propertyList.css";
import data from "./data.json";

function PropertyList() {
  const navigate = useNavigate();
  const handleNewPage = () => {
    navigate("./hotel");
    // console.log('hotelpages')
  };
  return (
    <div className="propertyList">
      <div className="propertyContainer">
        <h3>Browse by property type</h3>
        <div className="properyItems">
        {data.items && data.items.map((item, index) => {
          return (
              <div key={index} onClick={handleNewPage} className="propertyItem">
                <img src={item.img} alt="Bed on hotel" />
                <h4>{item.title}</h4>
                <p>{item.numAvailable}</p>
              </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
