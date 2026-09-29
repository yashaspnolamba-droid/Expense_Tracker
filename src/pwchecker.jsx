import React,{useState} from "react"

function Pwcheck(){
const[showpw,setShowpw] = useState("");
const[strength,setStrength] = useState("");
const[status,setstatus] = useState("");

function handlechangepw(event){
    setShowpw(event.target.value);
}
function handlestren(event){
    setStrength(event.target.value);
}
return(<div>
    <p>Password Strength Checker</p>
    <input value={showpw} onChange={handlechangepw} type={showpw? "password" : "text"}></input>
    <p>Password: {showpw}</p>
    <p>Strength: {showpw.length>5? "strong":"weak"}</p>
        <p>Status: {showpw.length==""? "Fill the password":"Must contain chars and nums(!,@,#,$,%,&,*,1-9,A-Z,a-z)"} {}</p>

</div>)
}
export default Pwcheck