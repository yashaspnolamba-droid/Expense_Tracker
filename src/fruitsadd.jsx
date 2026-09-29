import React,{useState} from "react"

function Fruitadd(){
    const[fruit,setFruit] = useState(["Apple","Mango","Banana"]);

    function handleAddfruits(){
const add_fru = document.getElementById("fruitadd").value;
document.getElementById("fruitadd").value = "";

setFruit(f => [...f,add_fru]);
    }
    function handleRemovefruits(index){
        setFruit(fruit.filter((_,i) => i !== index));
    }

    return(<div>
        <h2>
            List of Fruits
        </h2>
        <ul>
            {fruit.map((fruit,index) => <li key={index} onClick={()=>handleRemovefruits(index)}
            >{fruit}

            </li>)}
        </ul>
        <input type="text" id="fruitadd" placeholder="Enter the fruit"></input>
        <button onClick={handleAddfruits}>Add Fruit</button>
    </div>)
}
export default Fruitadd