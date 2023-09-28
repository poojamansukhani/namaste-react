import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
    let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onelineStatus = useOnlineStatus();
    return(
        <div className="px-4 py-4 bg-orange-50 fixed top-0 left-0 right-0 shadow-sm">
            <div className="container">
                <div className="justify-between flex items-center">
                    <div>
                        <a href="/" className="text-xl underline italic">Bhukkad Bazar</a>
                    </div>
                <div className="nav">
                    <ul className="flex">
                        <li className="px-4">Online status : {onelineStatus ? "✅" : "🔴"}</li>
                        <li className="px-2"><Link to="/">Home</Link></li>
                        <li className="px-2"><Link to="/about">About Us</Link></li>
                        <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                        <li className="px-2">Cart</li>
                        <li className="pl-2" onClick={()=>{
                            btnNameReact === "Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login");
                        }}>{btnNameReact}</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Header;