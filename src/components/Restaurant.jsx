import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const Restaurant = () =>{
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo,"resinfo")
    if(resInfo === null){
       return <ShimmerSimpleGallery/>
    }
    const GRAB_DATA = resInfo?.data?.cards[0]?.card?.card?.info
    console.log(GRAB_DATA,"this is grab data")

    const {name, cuisines} = GRAB_DATA;

    const item_card_grab = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(item_card_grab,"this is from which item card dist...")
    const {itemCards} = item_card_grab;


    // console.log(resInfo?.data)
    // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    return(
        <div className="container">
            {/* <h1>{name}</h1> */}
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(

                    <li key={item.card.info.id}>
                        {item.card.info.name} -{" Rs. "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>

                ))}
                <li></li>
            </ul>
        </div>
    )
}
export default Restaurant;