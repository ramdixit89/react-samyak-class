import React from 'react'
import { useEffect } from 'react';
const UseEff = () => {

    useEffect(() =>{
       async function getData(){
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
        }
        getData();
    }, []);

  return (
    <>
        <h1>hello from useEffect</h1>
    </>
  )
}

export default UseEff