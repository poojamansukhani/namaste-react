import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Error from "./components/Error";
const App = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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