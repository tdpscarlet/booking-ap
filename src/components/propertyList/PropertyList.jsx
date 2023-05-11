import "./propertyList.scss";
import images from "../../images";

function PropertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={images.hotel} alt="Khach san" className="pListImg" />
        <div className="pListTitles">
          <h1>Khách sạn</h1>
          <h2>57.993 khách sạn</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={images.apartment} alt="Can ho" className="pListImg" />
        <div className="pListTitles">
          <h1>Căn hộ</h1>
          <h2>57.459 căn hộ</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={images.resort} alt="Resort" className="pListImg" />
        <div className="pListTitles">
          <h1>Resort</h1>
          <h2>19.199 resort</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={images.villa} alt="Resort" className="pListImg" />
        <div className="pListTitles">
          <h1>Biệt thự</h1>
          <h2>1.129 biệt thự</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={images.vacationHome} alt="Resort" className="pListImg" />
        <div className="pListTitles">
          <h1>Nhà nghỉ mát</h1>
          <h2>71.213 nhà nghỉ mát</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
