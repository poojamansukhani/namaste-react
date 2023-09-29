import ItemList from "./ItemList";
import {useState} from "react";
const RestaurantCategory = ({data}) =>{
    const [showItems, setShowItems] = useState(false)
    const showHide = () =>{
        setShowItems(!showItems)
    }
    return(
        <>
            <div className="mb-4">
                <div onClick={showHide} className="cursor-pointer text-left flex justify-between shadow-md p-2 bg-gray-100 items-center">
                    <h3 className="p-2 font-bold capitalize">{data.title.toLowerCase()} ({data.itemCards.length})</h3>
                    {showItems && <span className="pr-4 text-lg">🔽</span>}
                    {!showItems && <span className="pr-4 text-lg">🔼</span>}
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </>
    )
}
export default RestaurantCategory;