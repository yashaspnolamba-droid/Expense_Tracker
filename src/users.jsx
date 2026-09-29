function Users(props){

    const cat = props.category
    const products = props.prods

      

    const li_prods = products.map(product => (<li key={product.id}>{product.name}:
                                                                            <b>{product.price}</b>
                                                                            {product.price > 500 && (
                                                                                <span> - Premium Product</span>
                                                                            )}
                                                                            </li>
                                                                            )
                                                                        );

                                                   
    return(<>
        <h3>{cat}</h3>
        <ol>{li_prods}</ol>
        </>
    );
}
export default Users