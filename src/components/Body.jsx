import RestroCard from "./RestroCard";
import resLists from "../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [lists, setLists] = useState([]);
    const [searchRestro, setSearchRestro] = useState("");
    const [filterRestro, setFilterRestro] = useState([]);
    useEffect(()=>{
   fetchdata();
    },[])
    const fetchdata = async () =>{
        const data = await fetch(
            'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        )
        const json = await data.json();
        setLists(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("Lists", lists)
        setFilterRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
const onelineStatus = useOnlineStatus();
if(onelineStatus === false) return <h1>Looks like you are offline! Please check your Internet connection.</h1>

    return lists.length === 0 ? <div className="container"><ShimmerSimpleGallery card imageHeight={300} /></div> :(
        <div className="">
            <div className="flex mb-5"> 
                <button type="button" className="px-2 bg-orange-400 text-white mr-2 rounded-sm" onClick={()=>{
                    let data = lists.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilterRestro(data);
                }}>
                    Top Rated Restaurents
                </button>
                <button type="button" className="px-2 bg-orange-400 text-white mr-2 rounded-sm" onClick={()=>{
                    
                    setFilterRestro(lists);
                }}>Show All</button>
                <div className="search">
                    <input className="border border-solid border-orange-400 rounded-sm" type="text" value={searchRestro}
                    onChange={(e)=>{
                        setSearchRestro(e.target.value)
                    }}
                    />
                    <button className="px-2 bg-orange-400 ml-2 rounded-sm text-white"
                    onClick={()=>{
                        let data = lists.filter(
                            (res) => res.info.name.toLowerCase().includes(searchRestro.toLowerCase())
                        );
                        setFilterRestro(data);
                    }}
                    >Search</button>
                </div>
            </div>
            <div className="restro-container flex flex-wrap mx-[-15px]">
                {
                    filterRestro.map((restaurent)=>{
                        return <Link className=" w-[270px] sm:w-[50%] xs:w-[100%] mx-[15px] card " to={"/restaurent/"+restaurent.info.id} key={restaurent.info.id}>
                                <RestroCard resData = {restaurent}/>
                            </Link>
                    })
                }
            </div>
        </div>    )
}
export default Body;