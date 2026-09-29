function Profile(props){
    if(props.IsOnline){
        
        return <h2>Name:{props.Name} <br></br>
        Age:{props.Age} <br></br>
        Online🟢</h2>
    }
    else{
        return <h2>Offline🔴</h2>
    }               
}

export default Profile