import React,{useState} from "react"
import "./Expense.css";

function Expensetrack(){
const[Exps,setExpobj]  = useState([]);
const[Exp_name,setExpname] = useState("");
const[Exp_pri,setExppri] = useState();
const[Exp_cat,setExpcat] = useState("");
const[Exp_date,setExpdate] = useState(new Date().getFullYear());
const [budget, setBudget] = useState("");

const totalSpent = Exps.reduce((total, exp) => {
    return total + Number(exp.price);
}, 0);


const remainingBudget = budget - totalSpent;

function handleAddexp(){
const new_exp = {name: Exp_name,price: Exp_pri,catg: Exp_cat,date: Exp_date};
setExpobj(Exps => [...Exps,new_exp]);

setExpname("");
setExppri("");
setExpcat("");
setDebit("");
setExpdate(new Date().getFullYear());
}
function handleRemoveexp(index){
setExpobj(Exps.filter((_,i) => i !== index));
}
function handle_name(event){
setExpname(event.target.value);
}
function handle_price(event){
setExppri(event.target.value);
}
function handle_catg(event){
setExpcat(event.target.value);
}
function handle_date(event){
setExpdate(event.target.value);
}
function handleaddDebit(event){
setDebit(event.target.value);
}
function handleBudget(e) {
    setBudget(e.target.value);
}

return(
<div className="expense-container">
    <h2 className="Heading">Expense-Tracker 💰</h2>

    <input
    type="number"
    placeholder="Set Monthly Budget"
    value={budget}
    onChange={handleBudget}
/>

    <h3>Total Spent: ${totalSpent}</h3>

<h3>Monthly Budget: ${budget || 0}</h3>

<h3>Remaining: ${remainingBudget || 0}</h3>

{remainingBudget < 0 && (
    <h3 style={{ color: "red" }}>
        ⚠ Budget Exceeded
    </h3>
)}
    <ol>
        {Exps.map((exp,index)=>
            <li key={index}   onClick={() => handleRemoveexp(index)}
>
            {exp.name} , ${exp.price} , {exp.catg} , {exp.date}
             </li>)}
    </ol>

    <input type="text" id="exp" placeholder="Enter the Exp-name" onChange={handle_name} value={Exp_name}></input>
    <br></br>
    <input type="number" id="exp" placeholder="Enter the Exp-price" onChange={handle_price} value={Exp_pri}></input>
    <br></br>
    <input type="text" id="exp" placeholder="Enter the Exp-category" onChange={handle_catg} value={Exp_cat}></input>
    <br></br>
    <input type="date" id="exp" placeholder="Enter the Exp-date" onChange={handle_date} value={Exp_date}></input>
    <br></br>
    <br></br>
    <button onClick={handleAddexp} id="btn">Add-Exp</button>
    <br></br>
    <br></br>
</div>);

}
export default Expensetrack