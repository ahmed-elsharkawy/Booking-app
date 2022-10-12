import { useNavigate } from "react-router-dom";
import "./featcherd.css";
import data from "./data.json";

function Featcherd() {
  const navigate = useNavigate();
  const handleNewPage = () => {
    navigate("./hotel");
  };
  return (
    <div className="featcherd">
      <div className="featcherdContainter">
        <div className="featcherdItems">
          {data.items &&
            data.items.map((item, index) => {
              return (
                <div key={index} onClick={handleNewPage} className={`featcherdItem item${index+1}`}>
                  <img
                    src={item.img}
                    alt="nature"
                  />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Featcherd;
