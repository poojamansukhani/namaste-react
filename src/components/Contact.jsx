import React from "react";
class Contact extends React.Component{
    constructor(props){
        super(props);
        console.log("Contact Constructor")
    }
    componentDidMount(){
        console.log("Contact Did mount")
    }
        render(){
            console.log("contact render");
            return(
                <div className="text-center">
                    <h1 className="font-bold text-3xl mb-10">Contact Us Page</h1> 
                    <form>
                        <div className="mb-5">
                        <input type="text" className="border border-gray-300 p-2" placeholder="Name"/>
                        </div>
                        <div className="mb-5">
                        <input type="text" className=" border border-gray-300 p-2" placeholder="Message"/>
                        </div>
                        
                        <button className=" bg-orange-400 text-white">Submit</button>
                    </form>
                </div>
            )
        }
}
// const Contact = () =>{
//     return(
//         <h1>Contact Us Page</h1>
//     )
// }
export default Contact;