import { useDispatch } from "react-redux";
import {menuImage} from "../utils/constants";
import {addItem, removeItem} from "../utils/cartSlice";
const ItemList = ({items}) => {
    const dispatch = useDispatch();
    // update store add item to cart and update store 
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    const handleRemoveItem = (item) =>{
        dispatch(removeItem(item));
    }
    return (
        <div className="border border-solid border-grey text-left">
            {items.map((item, index) => (
               <div key={index} className="p-4 pb-0">
                   <div className="flex justify-between">
                       <div className="w-11/12">
                        <h4 className=" text-md">
                            {item.card.info.name} 
                            <span className="text-sm text-orange-400 font-bold"> - Rs. {item.card.info.price / 100} </span>
                        </h4>
                        <p className=" text-gray-400 text-xs">{item.card.info.description}</p>
                     </div>
                     <div className="w-1/12 text-right relative">
                        <img src={menuImage + item.card.info.imageId} alt="" className=" w-half"/>
                        <button className="p-1 bg-black text-white shadow-md absolute w-[20px] bottom-0 left-0 text-xs" onClick={()=>handleAddItem(item)}>+</button>
                        <button className="p-1 bg-black text-white shadow-md absolute w-[20px] bottom-0 right-0 text-xs" onClick={()=>handleRemoveItem(item)}>-</button>
                    </div>
                   </div>
                   <hr className="mt-4"/>
                </div>
            ))}
        </div>
    )
}
export default ItemList;