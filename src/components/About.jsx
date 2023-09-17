import UserClass from './UserClass';
import User from './User';
const About = () => {
    return(
        <div>
            <h1>About Us Page</h1> 
            <User name={"John"} location={"London"}/>
            <UserClass name={"Mellisa"} location={"US"}/>
        </div>
       
    )
}
export default About;
