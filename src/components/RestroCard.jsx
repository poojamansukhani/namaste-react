import {CDN_URL} from "../utils/constants.js";
const RestroCard = (props) =>{
    const { resData } = props;
    const { name, cuisines, rating, costForTwo} = resData?.info
    console.log("resData?.info", resData?.info)
    return(
        <div className="res-card">
            <img src={CDN_URL + resData.info.cloudinaryImageId} alt=""/>
            <div className="card-details">
                <h3>{name}</h3>
                <h5 className="cuisines">{cuisines.join(", ")}</h5>
                <h6>{rating}</h6>
                <h6>{costForTwo}</h6>
                <h6>Time {resData?.info?.sla?.deliveryTime}</h6>
            </div>
        </div>
    )
}
export default RestroCard;