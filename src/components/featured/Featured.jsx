import "./featured.scss";
import images from "../../images";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src={images.nhatrang} alt="Nha Trang" />
        <div className="featuredTitles">
          <h1>Nha Trang</h1>
          <h2>1.660 chỗ nghỉ</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img className="featuredImg" src={images.hanoi} alt="Ha Noi" />
        <div className="featuredTitles">
          <h1>Hà Nội</h1>
          <h2>2.160 chỗ nghỉ</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img className="featuredImg" src={images.danang} alt="Da Nang" />
        <div className="featuredTitles">
          <h1>Đà Nẵng</h1>
          <h2>2.512 chỗ nghỉ</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
