import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    //check if online 
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=>{
        //Online window event listener will tell user online status
        window.addEventListener('offline', ()=>{
            setOnlineStatus(false);
        });
        window.addEventListener('online', ()=>{
            setOnlineStatus(true);
        });
    },[])
    //Boolean value
    return onlineStatus;
}
export default useOnlineStatus;