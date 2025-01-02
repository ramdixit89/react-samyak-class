import Child from "./Child";
import Dummy from "./Dummy";

const Parent = () => {

    const name = "Ram from Indore";
    const age = 24;
  return (
    <>
        <h1>Parent Component</h1>
        <h1>{name} Data from Parent...</h1>
        <hr></hr>
        <Child personName = {name} age={age}></Child>
        <Dummy dummyName = {name} age={age}></Dummy>
    </>
  )
}

export default Parent;