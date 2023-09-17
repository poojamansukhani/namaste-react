import {MENU_API} from "./constants";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchResInfo()
    },[]);
    const fetchResInfo = async () =>{
        const data = await fetch(MENU_API+resId); 
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;
}
export default useRestaurantMenu;