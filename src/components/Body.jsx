import RestroCard from "./RestroCard";
import resLists from "../utils/mockData.js";
const Body = () => {
    return(
        <div className="body">
            <div className="container">
                <div className="search">
                    Search
                </div>
                <div className="restro-container grid">
                    {
                        resLists.map((restaurent)=>{
                            return <RestroCard key={restaurent.data.id} resData = {restaurent}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Body;