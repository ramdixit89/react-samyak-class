const ListRendering = () => {
    // const person1 = {
    //     name: 'Ram',
    //     age: 25,
    //     address: "Indore"
    // };
    // const person2 = {
    //     name: 'Shyam',
    //     age: 30,
    //     address: "Bhopal"
    // }
    //Array of Object...
    const personDetail = [
        {
            name: 'Ram',
            age: 25,
            address: "Indore"
        },
        {
            name: 'Shyam',
            age: 30,
            address: "Bhopal"
        },
        {
            name : "Rahul",
            age : 35,
            address : "Bhopal"
        }
    ];
    return (
        <>
            <h1>List Rendering</h1>
            {/* <h4>
                {
                    person1.name
                }
            </h4>
            <h4>
                {
                    person1.age
                }
            </h4>
            <h4>
                {
                    person1.address
                }
            </h4>
            <h4>
                {
                    person2.name
                }
            </h4>
            <h4>
                {
                    person2.age
                }
            </h4>
            <h4>
                {
                    person2.address
                }
            </h4> */}
          <table>   
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>      
        {
            personDetail.map((person) =>
              <div>
                 {/* <ul>
                    <li>{person.name}</li>
                    <li>{person.age}</li>
                    <li>{person.address}</li>
                 </ul> */}
                 <tr>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.address}</td>
                 </tr>
             </div> 
            )
        }
         </table>

        </>
    )
}
export default ListRendering;