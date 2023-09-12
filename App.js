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
const resObj = [
    {
        type:"restaurent",
        data:{
            id:"334",
            name:"Cakes & Crafts",
            address:"69, Kormangla",
            rating:"3.9",
            cusine:["cakes", "pestries", "cheese cakes"],
            priceForTwo:"300",
            time:"30min",
            image:"5aaa916ac77c127f5aee2eada1543071"
        }
    },
    {
        type:"restaurent",
        data:{
            id:"335",
            name:"kfc",
            address:"69, Whitefield",
            rating:"4.5",
            cusine:["Fries", "Burger"],
            priceForTwo:"300",
            time:"30min",
            image:"e33e1d3ba7d6b2bb0d45e1001b731fcf"
        }
    }
]
const RestroCard = (props) =>{
    const { resData } = props;
    return(
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.data.image} alt=""/>
            <div className="card-details">
                <h3>{resData.data.name}</h3>
                <h5>{resData.data.cusine.join(", ")}</h5>
                <h6>{resData.data.rating}</h6>
                <h6>Price for 2 {resData.data.priceForTwo}</h6>
                <h6>{resData.data.time}</h6>
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
                    <RestroCard resData={resObj[0]}/>
                    <RestroCard resData={resObj[1]}/>
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