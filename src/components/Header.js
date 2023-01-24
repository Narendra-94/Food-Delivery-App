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
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About Us</li>
          </a>
          <a href="">
            <li>Contact Us</li>
          </a>
          <a href="">
            <li>Cart</li>
          </a>
          <li>
            <button className="login-button">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
