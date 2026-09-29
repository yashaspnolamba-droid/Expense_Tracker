function Usergreet(props){

        if(props.IsLoggedin){
            return <h2>Welcome {props.username}</h2>
        }
        else{
            return <h2>Please log in to continue</h2>
        }
}
export default Usergreet