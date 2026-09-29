import React,{useState} from "react"

function Onchange(){

    const[name,setName] = useState("None");

    const[quantity,setQuantity] = useState(1);
    const[comment,setComment] = useState("");
    const[pay,setPay] = useState("");
    const[ship,setShip] = useState("");

    function changename(event){
        setName(event.target.value);
    }

    function changeQuantity(event){
        setQuantity(event.target.value);
    }

    function changeComment(event){
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPay(event.target.value);
    }
    function handleShip(event){
        setShip(event.target.value);
    }

    return(<div>
        <input value={name} onChange={changename}></input>
        <p>Name: {name}</p>

        <input value={quantity} onChange={changeQuantity} type="number"></input>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={changeComment} placeholder="Enter the comment"></textarea>
        <p>Comment: {comment}</p>

        <select value={pay} onChange={handlePayment}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="UPI">UPI</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Gift">Gift</option>
        </select>
                <p>Payment: {pay}</p>

                <label>
                    <input type="radio" value="Pick up"
                    checked={ship == "Pick up"} onChange={handleShip}></input>
                    Pick up
                </label>
                <label>
                    <input type="radio" value="Delivery"
                    checked={ship == "Delivery"} onChange={handleShip}></input>
                    Delivery
                </label>
                <p>Shipping: {ship}</p>

    </div>)
}
export default Onchange