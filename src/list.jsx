// function List(props){
//     const cars_list = props.items;
    
// // cars.sort((a,b)=>a.name.localeCompare(b.name)); // sorting based on the name
// // cars.sort((a,b)=>b.name.localeCompare(a.name)); // sorting descending order 
// // cars.sort((a,b) => a.speed - b.speed);
// // cars.sort((a,b)=> b.speed - a.speed);

// const low_speeds = cars.filter(car => car.speed < 150)

//     const list_items = low_speeds.map(low_speed => <li key={low_speed.id}>{low_speed.name}: &nbsp;
//                                                                 <b>{low_speed.speed}</b></li>);
//     return(<ol>{list_items}</ol>);
// }

// export default List