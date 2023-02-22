import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useOnline from "../utils/useOnline";

const Icon = () => {
  return (
    <div>
      <a href="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/499/499552.png"
          alt="Icon"
          className="h-28"
        />
      </a>
    </div>
  );
};

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  const isOnline = useOnline();
  return (
    <div className="sticky top-0 bg-red-500 z-10 shadow-md">
      <div className="flex justify-between items-center">
        <Icon />

        <ul className="fixed  text-white bottom-0 flex p-2  justify-around  left-0 w-full md:gap-5 md:text-xl md:static md:w-auto ">
          <div className="flex">
            <Link to="/" className="px-3 py-2 ">
              <li>Home</li>
            </Link>

            <Link to="/about" className="px-3 py-2">
              <li>About Us</li>
            </Link>

            <Link to="/contact" className="px-3 py-2">
              <li>Contact Us</li>
            </Link>

            <Link to="/cart" className="px-3 py-2">
              <li>Instamart</li>
            </Link>
          </div>
        </ul>
        <ul className="h-full flex justify-between gap-5 text-xl items-center ">
          <Link to="/cart">
            <li className="px-3 py-2  text-gray-700">
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </Link>

          <li className="px-3 py-2 bg-gray-700 border-2  transition duration-0 text-white  hover:bg-white hover:text-gray-700 hover:duration-150 hover:border-gray-700">
            <div
              className=""
              style={
                isOnline
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "gray" }
              }
            ></div>
            <button className="w-auto " onClick={handleLogin}>
              {isLogged ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
