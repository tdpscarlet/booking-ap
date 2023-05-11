import "./hotel.scss";
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Hotel() {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/451156269.jpg?k=cd99d422e6161f08e8bd8f3c3c4588d1d995318879916cc625290e811db9db40&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/451156269.jpg?k=cd99d422e6161f08e8bd8f3c3c4588d1d995318879916cc625290e811db9db40&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/451156269.jpg?k=cd99d422e6161f08e8bd8f3c3c4588d1d995318879916cc625290e811db9db40&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/451156269.jpg?k=cd99d422e6161f08e8bd8f3c3c4588d1d995318879916cc625290e811db9db40&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/451156269.jpg?k=cd99d422e6161f08e8bd8f3c3c4588d1d995318879916cc625290e811db9db40&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/451156269.jpg?k=cd99d422e6161f08e8bd8f3c3c4588d1d995318879916cc625290e811db9db40&o=&hp=1",
    },
  ];
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="slider"></div>
        <div className="hotelWrapper">
          <button className="bookNow">Đặt căn hộ của bạn</button>
          <h1 className="hotelTitle">AZ five stars Ocean View Apartment</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>2 Nguyễn Thị Minh Khai, Nha Trang, Việt Nam</span>
          </div>
          <span className="hotelDistance">
            Vị trí xuất sắc - hiển thị bản đồ
          </span>
          <span className="hotelPriceHighlight">Xe đưa đón sân bay</span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Offering city views, AZ five stars Ocean View Apartment in Nha
                Trang offers accommodation, an outdoor swimming pool, a fitness
                centre, a garden, a terrace and a bar. Free WiFi is offered
                throughout the property and private parking is available on
                site. Accommodation is fitted with air conditioning, a fully
                equipped kitchen with a dining area, a flat-screen TV and a
                private bathroom with shower, free toiletries and a hairdryer.
                Some units feature a balcony and/or a patio with sea views.
                Guests at the apartment can enjoy a buffet breakfast. Popular
                points of interest near AZ five stars Ocean View Apartment
                include Nha Trang Beach, Tram Huong Tower and Nha Trang Centre
                Shopping Mall. The nearest airport is Cam Ranh International, 35
                km from the accommodation, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Điểm nổi bật của chỗ nghỉ</h1>
              <span>
                Nằm tại khu vực được đánh giá cao nhất ở Nha Trang, chỗ nghỉ này
                có điểm vị trí xuất sắc là 10,0
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Đặt ngay</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
