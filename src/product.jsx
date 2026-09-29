function Product(props){

    const final_price = props.price - (props.price * props.discount)/100;

    if(props.discount){
        return(
            <h2>
                <span style={{textDecoration:"line-through"}}>
                    ${props.price}
                </span>
                <br></br>
                <span>{final_price}</span>
            </h2>
        );
    }
  
    else{
        return <h2>${props.price}</h2>
    }
  
}
export default Product

