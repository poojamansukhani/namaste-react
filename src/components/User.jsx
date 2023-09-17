const User = (props) =>{
    return(
        <div className="container">
            <div className="user-card">
                    <h2>Name : {props.name}</h2>
                    <h3>Location : {props.location}</h3>

            </div>
        </div>
    )
}
export default User;