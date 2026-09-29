import React,{useState,useEffect} from "react";

function Components(){

    const [width, setwidth] = useState(window.innerWidth);
    const [heigth, setheight] = useState(window.innerHeight);

    useEffect(()=> {
    window.addEventListener("resize",handledim);
    console.log("Event listner added");
    },[]);

    function handledim(){
        setheight(window.innerHeight);
        setwidth(window.innerWidth);
    }

return(<>
<p>Wind Width: {width}px</p>
<p>Wind Heigth: {heigth}px</p>
</>);
}
export default Components;