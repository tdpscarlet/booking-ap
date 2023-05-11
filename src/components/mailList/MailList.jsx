import "./mailList.scss";

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailtitle">Tiết kiệm tiền, tiết kiệm thời gian!</h1>
      <span className="mailDesc">
        Đăng ký và chúng tôi sẽ gửi cho bạn những ưu đãi tốt nhất
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email của bạn" />
        <button type="submit">Đăng ký</button>
      </div>
    </div>
  );
}

export default MailList;
