// function Button(){

//      const hand_clk = () => console.log("OUCH");
//     let count  = 0;
    
//      const hand_clk2 = (name) => console.log(`${name} stop clicking me`);

//     const h_clk = (name) => {
//         if(count<4){
//             count++;
//             console.log(`${name} you clicked me ${count} times`);
//         }
//         else{
//             console.log(`${name} stop clciking me`);
//         }
//     };

//     return(
//         <button onClick={() => h_clk("yashas")}>Click Me 🙄</button>
//     );
// }
// export default Button



// function Button(){

//     const h_c = (e) => e.target.textContent = "I said Don't do it 😡";
//     return(
//         <button onClick={(e) => h_c(e)}>Click Me 🙄</button>
//     );
// }
// export default Button

function Button(){
    let count = 0;

    const h_c = (name) => {
        if(count < 5){
            count++;
            console.log(`${name} have ${count} notifications`);
           
        }
        else{
            count++;
            console.log("Too many notifications !!");
        }
    };
return(
    <button onClick={()=>h_c("yashas")}>Add Notification 🔔</button>
);
}
export default Button
