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
       // let interval = setInterval(() => fetchdata(true), (1000))
    //destroy interval on unmount
   // return () => clearInterval(interval)
   fetchdata();
    },[])
    const fetchdata = async () =>{
        const data = await fetch(
            'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        )
        const json = await data.json();
        setLists(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // const fetchdataa = async () =>{
    //     const data = await fetch(
    //         'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    //     )
    //     const json = await data.json();
    //     setListss(json);
    //     console.log("HI", listss)
    // }
    //Spinner until data fetch
    //Conditional Rendering
   
const onelineStatus = useOnlineStatus();
if(onelineStatus === false) return <h1>Looks like you are offline! Please check your Internet connection.</h1>

    return lists.length === 0 ? <div className="container"><ShimmerSimpleGallery card imageHeight={300} /></div> :(
        <div className="body">
            <div className="container">
                <div className="filter">
                    <button type="button" className="btn filter-btn" onClick={()=>{
                        let data = lists.filter(
                            (res) => res.info.rating > 4
                        );
                        setFilterRestro(data);
                    }}>
                        Top Rated Restaurents
                    </button>
                    <button type="button" className="btn filter-btn" onClick={()=>{
                       
                       setFilterRestro(resLists);
                    }}>Show All</button>
                    <div className="search">
                        <input type="text" value={searchRestro}
                        onChange={(e)=>{
                            setSearchRestro(e.target.value)
                        }}
                        />
                        <button className="btn"
                        onClick={()=>{
                            let data = lists.filter(
                                (res) => res.info.name.toLowerCase().includes(searchRestro.toLowerCase())
                            );
                            setFilterRestro(data);
                        }}
                        >Search</button>
                    </div>
                </div>
                <div className="restro-container grid">
                    {
                        filterRestro.map((restaurent)=>{
                            return <Link to={"/restaurent/"+restaurent.info.id} key={restaurent.info.id}>
                                    <RestroCard resData = {restaurent}/>
                                </Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Body;