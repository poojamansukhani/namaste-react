import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const Restaurant = () =>{
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null){
       return <ShimmerSimpleGallery/>
    }
    const GRAB_DATA = resInfo?.data?.cards[0]?.card?.card?.info
    const {name, cuisines} = GRAB_DATA;

// ku6 restro me crousel hai aur ku6 restro me nai 
// jis me hai crousel usme index [1] uska data hai 
// thats why you are facing this issue 
// you hard coded so much 


 cat_data_2 =
      resInfo.data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (data) => data.card.card?.["@type"].includes("ItemCategory")
      );
       const Search_Data = cat_data_2.map((data) =>
    data.card.card.itemCards?.map((data) => data.card.info)
  );
const ITEMS_SEARCHED = Search_Data.flat();
console.log(ITEMS_SEARCHED,"sdfsdsdfsd")

    const item_card_grab = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    const itemCards = item_card_grab.itemCards;

    return(
        <div className="container">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
            {ITEMS_SEARCHED.map((item, index)=>{
                   return( <li  key={index}>
                        {item?.name} -{" Rs. "}
                        {item?.price / 100 || item?.defaultPrice / 100}
                    </li>)
                    

})}
    
                <li></li>
            </ul>
        </div>
    )
}
export default Restaurant;