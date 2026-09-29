import React,{useState} from "react"

function Objarr(){
const[cars,setcars] = useState([]);
const[carYear,setCaryear] = useState(new Date().getFullYear());
const[carMake,setCarmake] = useState("");
const[carModel,setCarmodel] = useState("");

function handleAddCars(){
const newCar = {year: carYear,make: carMake,model: carModel};
setcars(cars => [...cars,newCar]);

setCaryear(new Date().getFullYear());
setCarmake("");
setCarmodel("");
}
function handleRemoveCars(index){
setcars(cars.filter((_,i) => i !== index));
}
function handleCaryear(event){
setCaryear(event.target.value);
}
function handleCarmake(event){
setCarmake(event.target.value);
}
function handleCarmodel(event){
setCarmodel(event.target.value);
}

return(<div>
    <h2>List of Car Objects</h2>
    <ul>
{cars.map((car,index)=>
<li key={index} onClick={()=> handleRemoveCars(index)}>
{car.year} {car.make} {car.model}
        </li>)}
    </ul>

    <input type="number" value={carYear} onChange={handleCaryear}></input>
    <br></br>
    <input type="text" value={carMake} onChange={handleCarmake} placeholder="Enter the car make"></input>
    <br></br>
    <input type="text" value={carModel} onChange={handleCarmodel} placeholder="Enter the car model"></input><br></br>
    <button onClick={handleAddCars}>Add Cars</button>
</div>);
}
export default Objarr