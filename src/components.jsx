import React,{useState} from "react";

function Components(){
const[count,setCount] = useState(0);

const increase = () => {
    setCount(count + 1);
}
const decrease = () => {
    setCount(count - 1);
}
const Default  = () => {
    setCount(0);
}

return(<>
<div className="ctrcontainer">
    <p className="ctrdisp">{count}</p>
<button className="ctrbtn" onClick={decrease}>Decrement</button>
<button className="ctrbtn" onClick={Default}>Reset</button>
<button  className="ctrbtn" onClick={increase}>Increment</button>
</div>

</>)

}
export default Components