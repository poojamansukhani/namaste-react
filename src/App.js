import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
const App = () => {
    const [userName, setUserName] = useState();
    useEffect(()=>{
        const data = {
            name:"Pooja",
        }
        setUserName(data.name);
    },[])
    return(
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app">
        <UserContext.Provider value={{loggedInUser:"PM"}}>
            <Header/>
        </UserContext.Provider>
            <div className="container">
                <div className="mt-20">
                     <Outlet/>
                </div>
            </div>
        </div>
        </UserContext.Provider>
    )
}
const Contact = lazy(()=>import('./components/Contact'));
const About = lazy(()=>import('./components/About'));
const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Suspense fallback={<h1>Loading...</h1>}><Contact/></Suspense>
            },
            {
                path:"/restaurent/:resId",
                element:<Restaurant/>
            }
        ],
        errorElement:<Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoute}/>)