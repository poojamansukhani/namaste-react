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
                <h1>Contact Us Page</h1> 
            )
        }
}
// const Contact = () =>{
//     return(
//         <h1>Contact Us Page</h1>
//     )
// }
export default Contact;