import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store)=>{
        //what portion of store access needed read items from store
        return store.cart.items;
    });
    const dispatch = useDispatch();
    const clearCartHandle = () =>{
        dispatch(clearCart());
    }
    return <div className=" text-center">
        <h1 className="font-bold text-2xl mb-2">Cart</h1>
        <button className="p-2 m-2 bg-orange-400 text-white mb-4 rounded" onClick={clearCartHandle}>Clear cart</button>
        
        <ItemList items={cartItems}/>
        {cartItems.length === 0 && <h1 className="mt-4 text-xl">Your cart is empty! Add items to cart.</h1>}
    </div>
}
export default Cart;