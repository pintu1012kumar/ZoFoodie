import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom"; // A component used instead of anchor tag
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul >
                    <li className="links">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

                    {/* <link></link> this helps in routing to diffrent pages without reloading whole page */}
                    {/* In html output it behave/show as an anchor tag */}
                    <li className="links"> <Link to="/">Home</Link> </li>
                    <li className="links"> <Link to="/about">About Us</Link> </li>
                    <li className="links"> <Link to="/contact">Contact Us</Link> </li>
                    <li className="links"> <Link to="/grocery">Grocery</Link> </li>
                    <li className="links"> <Link to="/cart">Cart</Link> </li>
                    <button 
                        className="loginBtn"
                        onClick = {() => {
                            btnName === "login" ? setBtnName("logout") : setBtnName("login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;