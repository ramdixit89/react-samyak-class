import { useEffect } from "react";

const Products = () =>{

    const fetcProducts = async() =>{
    const response = await fetch('https://fakestoreapi.com/products');   
    const data = await response.json();   
    console.log(data);
    }
    useEffect(()=>{
        fetcProducts();
    },[]);
    return(
        <>
           
        </>
    )
}

export default Products;