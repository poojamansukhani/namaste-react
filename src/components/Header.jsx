import { useEffect, useState } from "react";
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
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
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