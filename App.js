import React from "react";
import ReactDOM from "react-dom/client";


//Header Component
const HeaderComponent = () => {
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
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
const resObj = {
    type:"restaurent",
    data:{
        id:"334",
        name:"Cakes & Crafts",
        address:"69, Kormangla",
        rating:"3.9",
    }
}
const RestroCard = ({resName, cusine, rating, time}) =>{
    return(
        <div className="res-card">
            <img src="https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/234187ae/strawberry-cake.jpg" alt=""/>
            <div className="card-details">
                <h3>{resName}</h3>
                <h5>{cusine}</h5>
                <h6>{rating}</h6>
                <h6>{time}</h6>
            </div>
        </div>
    )
}
const BodyComponent = () => {
    return(
        <div className="body">
            <div className="container">
                <div className="search">
                    Search
                </div>
                <div className="restro-container grid">
                    <RestroCard resName="Cakes & Carfts" cusine="Cakes, Pestries, Cheese Cakes" rating="4.5" time="38min"/>
                    <RestroCard resName="KFC" cusine="Burger, Fries, Fast Food" rating="4.6" time="30min"/>
                </div>
            </div>
        </div>
    )
}
const App = () => {
    return(
        <div className="app">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)