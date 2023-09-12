import {CDN_URL} from "../utils/constants.js";
const RestroCard = (props) =>{
    const { resData } = props;
    const { name, cusine, rating, priceForTwo, time} = resData?.data
    return(
        <div className="res-card">
            <img src={CDN_URL + resData.data.image} alt=""/>
            <div className="card-details">
                <h3>{name}</h3>
                <h5>{cusine.join(", ")}</h5>
                <h6>{rating}</h6>
                <h6>Price for 2 {priceForTwo}</h6>
                <h6>{time}</h6>
            </div>
        </div>
    )
}
export default RestroCard;