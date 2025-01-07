import { useEffect, useState } from 'react';
const State = () =>{
const [name, setName] =  useState('Ram Dixit');

useEffect(() =>{
    setName('Shyam Dixit');
});

       return(
        <>
           <h1>My name is : {name}</h1>
        </>
       )
}

export default State;