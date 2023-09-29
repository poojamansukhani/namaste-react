import {menuImage} from "../utils/constants";
const ItemList = ({items}) => {
    return (
        <div className="border border-solid border-grey text-left">
            {items.map((item) => (
               <div key={item.card.info.id} className="p-4 pb-0">
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
                        <button className="p-1 bg-black text-white shadow-md absolute w-[70px] bottom-0 left-0">+ Add</button>
                    </div>
                   </div>
                   <hr className="mt-4"/>
                </div>
            ))}
        </div>
    )
}
export default ItemList;