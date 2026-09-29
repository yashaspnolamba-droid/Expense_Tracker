import React,{useState} from "react";

function ArrUpdate(){

    const[cars,setCars] = useState(["BMW","Mercedes","Audi"]);

    function handleAddCars(){

        const newcar = document.getElementById("carinp").value;
        document.getElementById("carinp").value = "";

    setCars(f => [...f,newcar]);        
    }  

    function handleRemoveCars(index){
        setCars(cars.filter((_,i) => i !== index));
    }

    return(<div>
<h3>List of Cars</h3>
<ul>
    {cars.map((cars,index) => <li key={index} onClick={()=> handleRemoveCars(index)}>
        {cars}
        </li>)}
</ul>
    <input type="text" id="carinp" placeholder="Enter the car name"></input>
<button onClick={handleAddCars}>Add Cars</button>
    </div>)
}
export default ArrUpdate