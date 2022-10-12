import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import "./hotel.css";
import MyNav from "../../components/nav/MyNav";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import ImagesWindow from "./imagesWindow/ImagesWindow";
import { useState } from "react";
import data from './data.json';
import { useParams } from "react-router-dom";


function Hotel() {
  const {id} = useParams();
  const item = data.items[id-1];
  const [openImagesWindow, setOpenImagesWindow] = useState(false);
  return (
    <>
      {openImagesWindow && (
        <div
          onClick={() => setOpenImagesWindow(!openImagesWindow)}
          className="imagesWindowOverlay"
        >
          <div className="close">
            <i>
              <FontAwesomeIcon
                className="closeIcon"
                icon={faXmarkCircle}
                onClick={() => setOpenImagesWindow(!openImagesWindow)}
              />
            </i>
          </div>
        </div>
      )}
      <MyNav></MyNav>
      <Header type="list"></Header>
      <div className="hotel">
        <div className="hotelContainer">
          {openImagesWindow && (
            <div className="imagWindow">
              <ImagesWindow images={item.imgs}></ImagesWindow>
            </div>
          )}
          <h1>{item.title}</h1>
          <span className="location">
            <FontAwesomeIcon icon={faLocationDot} /> {item.address}
          </span>
          <p className="locPros">{item.distance}</p>
          <p className="bookPros">
          {item.bookProps}
          </p>
          <div className="imageList">
            {item.imgs.map((item, index, list) => {
              if (index < 5) {
                return (
                  <div key={index} className="oneImg">
                    <img
                      src={item}
                      alt="hotel"
                      onClick={() => setOpenImagesWindow(!openImagesWindow)}
                    />
                  </div>
                );
              } else if (index === 5) {
                return (
                  <div
                    onClick={() => setOpenImagesWindow(!openImagesWindow)}
                    key={index}
                    className="oneImg imgNum6"
                  >
                    <img
                      src={item}
                      alt="hotel"
                      onClick={() => setOpenImagesWindow(!openImagesWindow)}
                    />
                    <div className="plusImages">
                      {`+ ${list.length - 6} photos`}
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="hotelDisc">
            <div className="hotelIntro">
              <h2>Stay in the heart of Krakow</h2>
              <p>
                Located a 5-minutes walk from St. Florian's Gate in Krakow,
                Tower Street Apartments has accommodations with air a microwave,
                a flat-screen TV, and a provate bathroom with shower and a
                hairdryer. A fridge is also include Cloth Hall, Main Market
                Square and Town Hall Tower. The nearest airport is John Pail II
                International Krakow-Balice, 16.1 km from Tower Street
                Apartments, and the property offers a paid airport shuttle
                service.
              </p>
            </div>
            <div className="offer">
              <h4>Perfect stay!</h4>
              <p>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <p className="totalPrice">
                {item.price} <span className="numOfNight">({item.nights})</span>
              </p>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList></MailList>
      <Footer></Footer>
    </>
  );
}

export default Hotel;
