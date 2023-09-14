import RestroCard from "./RestroCard";
import resLists from "../utils/mockData.js";
import { useEffect, useState } from "react";
const Body = () => {
    const [lists, setLists] = useState(resLists)
    useEffect(()=>{
        fetchdata();
    },[])
    //Fetch data from API 
    const fetchdata = async () =>{
        const data = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
        )
        console.log("data", data)
    }
    return(
        <div className="body">
            <div className="container">
                <div className="filter">
                    <button type="button" className="btn filter-btn" onClick={()=>{
                        let data = lists.filter(
                            (res) => res.data.rating > 4
                        );
                        setLists(data);
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