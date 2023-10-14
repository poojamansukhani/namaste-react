import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Header = () => {
    let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onelineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    //Selector hook to subscribe cartSlice store
    const cartItems = useSelector((store)=>{
        //what portion of store access needed read items from store
        return store.cart.items;
    });
    return(
        <div className="px-4 py-4 bg-orange-50 fixed z-10 top-0 left-0 right-0 shadow-sm">
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
                        <li className="px-2"><Link to="/cart">Cart ({cartItems.length} - items)</Link></li>
                        <li className="px-2">
                            <button  onClick={()=>{
                            btnNameReact === "Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login");
                        }}>{btnNameReact}</button>
                        </li>
                        <li>{loggedInUser}</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Header;