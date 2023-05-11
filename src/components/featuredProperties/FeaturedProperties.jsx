import "./featuredProperties.scss";
import images from "../../images";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import hotels from "../../data/hotels";

function FeaturedProperties() {
  const scrollref = useRef();
  const scroll = (direction) => {
    const { current } = scrollref;
    if (direction === "left") {
      current.scrollLeft -= 260;
    } else {
      current.scrollLeft += 260;
    }
  };

  return (
    <div className="fp">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="fpArrowLeft"
        onClick={() => scroll("left")}
      />

      <div className="fpItems" ref={scrollref}>
        {hotels.map((hotel, index) => (
          <div className="fpItem" key={index}>
            <img src={hotel.image} alt="" className="fpImg" />
            <span className="fpName">{hotel.name}</span>
            <span className="fpCity">{hotel.city}</span>
            <span className="fpPrice">Bắt đầu từ {hotel.price} VND</span>
            <div className="fpRating">
              <button>{hotel.rating}</button>
              <span>{hotel.rating > 8 ? "Xuất sắc" : "Tốt"}</span>
            </div>
          </div>
        ))}
      </div>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="fpArrowRight"
        onClick={() => scroll("right")}
      />
    </div>
  );
}

export default FeaturedProperties;
