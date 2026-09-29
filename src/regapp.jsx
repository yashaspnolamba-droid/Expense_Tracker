import React,{useState} from "react"

function Regapp(){
const[Name,setName] = useState("");
const[Email,setEmail] = useState("");
const[Course,setCourse] = useState("");
const[Phonenum,setPhonenum] = useState("");
const[regstud,setregstud] =  useState("");

function handlename(event){
    setName(event.target.value);
}
function handleemail(event){
    setEmail(event.target.value);
}
function handlecourse(event){
    setCourse(event.target.value);
}
function handlephnum(event){
    setPhonenum(event.target.value);
}
const handlesubmit =(event) =>{
event.preventDefault();

setregstud(Name);
};

return(<div>
    <form onSubmit={handlesubmit}>
    <h3>Student Registration Form</h3>
           <p>Name: <input type="text" value={Name} onChange={handlename}></input>
           </p>
           <p>
            Email: <input type="text" value={Email} onChange={handleemail}></input>
           </p>
           <p>
            Phone[+91]: <input type="text"  value={Phonenum} onChange={handlephnum}></input>
           </p>
           <select value={Course} onChange={handlecourse}>
            <option value="">Select Course</option>
            <option value="AI/ML">AI/ML</option>
            <option value="AI/DS">AI/DS</option>
            <option value="Full-Stack Development">Full-Stack Development</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Devops">Devops</option>
            <option value="Cloud Engineer">Cloud Computing</option>
            <option value="Data Analytics">Data Analytics</option>
           </select>
           <p>Course: {Course}</p>

           <button type="submit">Submit</button>
           </form>
<br></br>
    <h3>Registerd Students</h3>
           <p>{regstud}</p>

</div>)
}
export default Regapp