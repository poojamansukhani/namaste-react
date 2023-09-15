import RestroCard from "./RestroCard";
import resLists from "../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
const Body = () => {
    const [lists, setLists] = useState([])
    useEffect(()=>{
        let interval = setInterval(() => fetchdata(true), (1000))
    //destroy interval on unmount
    return () => clearInterval(interval)
    },[])
    const fetchdata = async () =>{
        const data = await fetch(
            "http://localhost:3000/restro"
        )
        const json = await data.json();
        setLists(json);
    }
    //Spinner until data fetch
    //Conditional Rendering
   
    return lists.length === 0 ? <div className="container"><ShimmerSimpleGallery card imageHeight={300} /></div> :(
        <div className="body">
            <div className="container">
                <div className="filter">
                    <button type="button" className="btn filter-btn" onClick={()=>{
                        let data = lists.filter(
                            (res) => res.data.rating > 4
                        );
                        setLists(data.data);
                    }}>
                        Top Rated Restaurents
                    </button>
                    <button type="button" className="btn filter-btn" onClick={()=>{
                       
                        setLists(resLists);
                    }}>Show All</button>
                </div>
                <div className="restro-container grid">
                    {
                        lists.map((restaurent)=>{
                            return <RestroCard key={restaurent.data.id} resData = {restaurent}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Body;