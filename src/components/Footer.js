import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Footer = () => {
  const {user} = useContext(UserContext)
    return <h4 className="font-bold p-10 m-10">Made with love by - {user.name}</h4>;
  };

  export default Footer;