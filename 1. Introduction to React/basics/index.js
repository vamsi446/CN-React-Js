
//const reactHeading = React.createElement("h1", {className: "header", id: "react-header", children: "Hello React!"});
//const reactHeading = React.createElement("h1", {className: "header", id: "react-header"},"Hello React!");

// const jsxHeading = (<h1>Hello JSX</h1>);

//React Componenets
//Functional 
//class-based Componenets 
const Name =()=>{
    return (
        <>
        <p>JSX is Javascript XML</p>
        </>
    )
}

function Student() {
    const students = [
      { name: "google", age: 12, marks: 41 },
      { name: "vamsi", age: 23, marks: 56 },
    ];

    // && returns last truthy value/ 1st falsy value
    //everything in js is considered truthy except for null, undefined, "", false, 0 
    console.log("hello"&& true);
    console.log(true && "hello");
    console.log(false &&"vamsi");


    // || operator return first truthy value/ last falsy value
    
    return (<>
    <h1>Student Table</h1>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
        </tr>
        </thead>
        <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.marks}</td>
          </tr>
        ))}
      </tbody>
        
    </table>
  
    
    </>);
  }
  
function App(){
    var name = "Vamsi";
    var age = 23;
    var isStudent= true;
    /*bool value doesn't render */
    return(
        <>
        <h1>Hello World</h1>
        <p>Learning React</p>
        <p>
            Name: {name}
            </p>
        <p>
            age: {age}
        </p>
        <p>
            isStudent: {isStudent.toString()} 
        </p>
        
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(
<>
<App></App>

<Name/>
<Student/>
</>);
