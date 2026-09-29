function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.IsStudent ? "true" : "false"}</p>

            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.IsStudent ? "true" : "false"}</p>

            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.IsStudent ? "true" : "false"}</p>
        </div>
    );
}
Student.propTypes = {
    
}

export default Student