import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Pooja",
                location:"Dummy",
                avatar_url:"Dummy photo"
            }
        }
        console.log("child constructore called")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/poojamansukhani");
        const json = await data.json();
        this.setState({userInfo:json})
        console.log("child component did mount done");
    }
    componentDidUpdate(){
        console.log("child Updtaed user class");
    }
    componentWillUnmount(){
        console.log("child Component will unmount");
    }
    render(){
        console.log("child render called");
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className="container">
                <div className="user-card">
                    <img src={avatar_url}/>
                    <h2>Name : {name}</h2>
                    <h3>Location : {location}</h3>

                </div>
            </div>
        )
    }
}
export default UserClass;