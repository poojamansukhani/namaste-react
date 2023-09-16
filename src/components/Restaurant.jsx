import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constants";
const Restaurant = () =>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    useEffect(()=>{
        fetchResInfo()
    },[]);
    if(resInfo === null){
        <ShimmerSimpleGallery/>
    }
    const fetchResInfo = async () =>{
        const data = await fetch(MENU_API+resId); 
        const json = await data.json();
        setResInfo(json);
    }
    return(
        <div className="container">
            <h1>Hi</h1>
            {/* <h1>{resInfo[0].data.name}</h1> */}
        </div>
    )
}
export default Restaurant;