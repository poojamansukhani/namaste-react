import {CDN_URL} from "../utils/constants.js";
const RestroCard = (props) =>{
    const { resData } = props;
    const { name, cuisines, rating, costForTwo, avgRating} = resData?.info
    return(
        <div className="res-card rounded-sm border border-solid border-gray-300 shadow-md mb-6 hover:shadow-lg">
            <img src={CDN_URL + resData.info.cloudinaryImageId} alt="" className=" h-[160px] w-[100%]"/>
            <div className="card-details px-[15px] pb-[15px]">
                <h3 className="text-1xl font-bold underline py-1 text-orange-400">{name}</h3>
                <h5 className="cuisines mb-4">{cuisines.join(", ")}</h5>
                <p className="pb-2">{costForTwo}</p>
                <div className="flex justify-between">
                    <p>Time {resData?.info?.sla?.deliveryTime}</p>
                    <p>Rating {avgRating}</p>
                </div>
            </div>
        </div>
    )
}

//Higher order component which takes input as restroCard and output will be enhance  restro card promoted 

export const withPromotedLabel = (RestroCard) => {
    return (props) =>{
        return(
            <div>
                <label className="promoted absolute z-1 bg-orange-400 px-2 text-white ml-[-10px]">Promoted</label>
                <RestroCard {...props}/>
            </div>
        )
    }
}

export default RestroCard;