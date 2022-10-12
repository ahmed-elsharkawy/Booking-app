import "./mynav.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="logoLink" to="/">
          <span className="logo">Booking app</span>
        </Link>
        <div className="navItems">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default MyNav;
