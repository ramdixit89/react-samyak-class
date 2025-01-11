// import { useEffect, useState } from 'react';
// const State = () =>{
// const [name, setName] =  useState('Ram Dixit');

// useEffect(() =>{
//     setName('Shyam Dixit');
// });
//        return(
//         <>
//            <h1>My name is : {name}</h1>
//         </>
//        )
// }

// export default State;

// import React from 'react'
// import { useState } from 'react'
// const State = () => {

//    const [name, setName] = useState('');
//    const [age, setAge] = useState(0);
   
//    const handleSubmit = (e) =>{
//     e.preventDefault();
//     setName(name); 
//     setAge(age);
//     console.log(name, age);
//    }

//    const onChange = (e) =>{
//     setName(e.target.value);
//    }
//    const onChangeAge = (e) =>{
//     setAge(e.target.value);
//    }
//   return (
//     <>
//         <div>
//             <input onChange={onChange} type='text' placeholder='Enter name...' name='name' value={name} id='name'/>
//             <input onChange={onChangeAge} type='number' placeholder='Enter age...' name='age' value={age} id='age'/>
//             <button onClick={handleSubmit} >Submit</button>
//         </div>

//         <div>
//             <h3>My name is : {name} </h3>
//             <h3>My age is : {age} </h3>
//         </div>
//     </>
//   )
// }

// export default State

//UseEffect Hook : 