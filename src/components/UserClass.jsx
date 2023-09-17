import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child constructore is called");
        this.state = {
            count:0,
            count2:1,
        }
    }
    componentDidMount(){
        console.log("Child did mount is called");
    }
    render(){
        console.log("Child render is called");
        const {name, location} = this.props;
        return(
            <div className="container">:
                <div className="user-card">
                <h1>Count2 : {this.state.count2}</h1>
                    <h1>Count : {this.state.count}</h1>
                    <button onClick={()=>this.setState({
                        count:this.state.count+1
                        })
                        }>Increase</button>
                    <h2>Name : {name}</h2>
                    <h3>Location : {location}</h3>

                </div>
            </div>
        )
    }
}
export default UserClass;