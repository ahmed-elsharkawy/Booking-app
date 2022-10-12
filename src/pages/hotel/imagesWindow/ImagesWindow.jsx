import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./imagesWindow.css";

function ImagesWindow({ images }) {
  const [openSlider, setOpenSlider] = useState(false);
  const [currentImage, setCurretImage] = useState(images[0]);
  const handleSlider = (index) => {
    setCurretImage(images[index]);
    setOpenSlider(!openSlider);
  };
  const swapImages = (type) => {
    if (type === "l") {
      const target =
        images.indexOf(currentImage) === 0
          ? images.length - 1
          : images.indexOf(currentImage) - 1;
      setCurretImage(images[target]);
    } else if (type === "r") {
      const target =
        images.indexOf(currentImage) === 12
          ? 0
          : images.indexOf(currentImage) + 1;
      setCurretImage(images[target]);
    }
  };
  return (
    <>
      <div className="imagesWindow">
        <div className="head">
          <div className="headContainer">
            <div className="backToGallery"  onClick={() => setOpenSlider(!openSlider)}>
              <FontAwesomeIcon className="backArrow" icon={faArrowLeft} /> <span>Gallery</span>
            </div>
            <h3>Holiday Inn London - Regent's Park, an IHG Hotel</h3>
          </div>
        </div>
        {openSlider ? (
          <div className="slider">
            <div className="arrowLeft" onClick={() => swapImages("l")}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="imageDisplay">
              <img src={currentImage} alt="hotel" />
            </div>
            <div className="arrowRihgt" onClick={() => swapImages("r")}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        ) : (
          <div className="allImages">
            <div className="imageList">
              {images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="oneImg"
                    onClick={() => handleSlider(index)}
                  >
                    <img src={item} alt="hotel" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ImagesWindow;
