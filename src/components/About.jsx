import UserClass from './UserClass';
import User from './User';
import React from 'react';
import Contact from './Contact';

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    }
    componentDidMount(){
        console.log("Parent component did mount")
    }
    
    render(){
        console.log("Parent render is called")
        return(
            <div>
                <h1>About Us Page</h1> 
                <UserClass name={"Mellisa"} location={"US"}/>
                <UserClass name={"Mellisa"} location={"US"}/>
            </div>
        )
    }
}
// const About = () => {
//     return(
//         <div>
//             <h1>About Us Page</h1> 
//             <User name={"John"} location={"London"}/>
//             <UserClass name={"Mellisa"} location={"US"}/>
//         </div>
       
//     )
// }
export default About;
