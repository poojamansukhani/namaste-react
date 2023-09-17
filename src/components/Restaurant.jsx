import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () =>{
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
   
    if(resInfo === null){
        <ShimmerSimpleGallery/>
    }
    
    return(
        <div className="container">
            <h1>Hi</h1>
            <h1>{resInfo[0].data.name}</h1>
        </div>
    )
}
export default Restaurant;