const Child = (props) =>{
    return(
        <>
            <h1>Child component</h1>
            <h1>{props.personName} Data from Child component...</h1>
            <h3>Age is : {props.age}</h3>
            <hr></hr>
        </>
    )
}

export default Child;