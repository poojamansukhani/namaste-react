import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return(
        <div className="header">
            <div className="container">
                <div className="row justify-space-between align-center">
                <div>
                    <a href="" className="logo">Bhukkad Bazar</a>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li>Cart</li>
                        <li className="btn" onClick={()=>{
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