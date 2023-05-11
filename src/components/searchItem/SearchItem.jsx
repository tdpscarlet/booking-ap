import images from "../../images";
import "./searchItem.scss";

function SearchItem({ data }) {
  return data.map((hotel, index) => (
    <div className="searchItem" key={index}>
      <img src={hotel.image} alt={hotel.name} className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{hotel.name}</h1>
        <span className="siLocation">
          {hotel.city}
          <span>Xem trên bản đồ</span>
        </span>
        <span className="siDistance">Cách trung tâm 150m</span>
        <span className="siTaxiOp">Ưu Đãi Mùa Du Lịch</span>
        <span className="siSubtitle">Suite Nhìn Ra Thành Phố</span>
        <span className="siFeatures">
          1 suite riêng tư • 1 phòng ngủ • 1 phòng khách • 1 phòng tắm • 54m²
        </span>
        <span className="siCancelOp">Miễn Phí hủy phòng</span>
        <span className="siCancelOpSubtitle">Không cần thanh toán trước</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{hotel.rating > 8 ? "Xuất sắc" : "Tốt"}</span>
          <button>{hotel.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{hotel.price} VND</span>
          <span className="siTaxOp">Đã bao gồm thuế và phí</span>
          <button className="siCheckButton">
            Xem chỗ trống <span>{">"}</span>
          </button>
        </div>
      </div>
    </div>
  ));
}

export default SearchItem;
