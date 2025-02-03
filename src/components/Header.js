import { useState } from "react";
import { Link } from "react-router";

export const Title = () => {
  return (
    <a href="/">
      <h1 id="title" key="h2">
        GrubHub
      </h1>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
