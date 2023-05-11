import "./navbar.scss";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate("/")}>
          letsaGO
        </span>
        <div className="navItems">
          <button className="navButton">Đăng ký</button>
          <button className="navButton">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
