function Notify(props){
    
        if(props.count > 0){
            return <h2>You have {props.count} Notifications</h2>
        }
        if(props.count == 0){
            return <h2>No Notifications</h2>
        }
}

export default Notify