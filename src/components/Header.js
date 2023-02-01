import { Link } from "react-router-dom";

const Icon = () => {
  return (
    <div>
      <a href="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/499/499552.png"
          alt="Icon"
          className="icon"
        />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Icon />

      <h1></h1>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About Us</li>
          </Link>

          <Link to="/contact">
            <li>Contact Us</li>
          </Link>

          <Link to="/cart">
            <li>Cart</li>
          </Link>

          <li>
            <button className="login-button">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
