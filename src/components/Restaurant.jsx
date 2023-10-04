import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const Restaurant = () =>{
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    
    if(resInfo === null){
       return <ShimmerSimpleGallery/>
    }
    const GRAB_DATA = resInfo?.data?.cards[0]?.card?.card?.info
    const {name, cuisines} = GRAB_DATA;

 cat_data_2 =
      resInfo.data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        //(data) => data.card.card?.["@type"].includes("ItemCategory")
        (data) => data.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
       const Search_Data = cat_data_2.map((data) =>
    data.card.card.itemCards?.map((data) => data.card.info)
  );
const ITEMS_SEARCHED = Search_Data.flat();

    const item_card_grab = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return(
        <div className="text-center">
            <h1 className=" text-xl underline font-bold">{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <br/>
            {cat_data_2.map((category, index)=>(
                    <RestaurantCategory key={category.card.card.title} data={category.card.card} showItems={index === showIndex  ? true : false}
                    setShowIndex = {()=>setShowIndex(index)} />
                ))
            }

        </div>
    )
}
export default Restaurant;