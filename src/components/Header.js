import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import Logo from "../assets/img/Grubhub Logo.png";
import { useSelector } from "react-redux";
import store from "../utils/store";

export const Title = () => {
  return (
    <a href="/">
      <img className="h-20 p-2 mt-4" alt="logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <Link to="/cart">
            <li className="px-2">Cart - {cartItems.length} </li>
          </Link>
        </ul>
      </div>
      <div className="content-evenly mr-3">
        <h1 className="font-bold text-red-900">{user.name}</h1>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};
export default Header;
