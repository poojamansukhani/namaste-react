import {MENU_API} from "./constants";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
const useRestaurantMenu = (resId) =>{
    console.log("fetchinnggg......")
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchResInfo();
    },[]);
    const fetchResInfo = async () =>{
        const data = await fetch('https://corsproxy.io/?' + encodeURIComponent(MENU_API+resId)); 
        console.log("data", data)
        const json = await data.json();
        setResInfo(json); 
        console.log("done with set data")
    }
    return resInfo;
}
export default useRestaurantMenu;