import {useRouteError} from "react-router-dom";
const Error = () =>{
    //Get more information about error from this hook
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Opps! something went wrong</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    );
};
export default Error;