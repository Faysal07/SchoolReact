import { useState } from "react";

function StudentForm(){
    const [name, setName] = useState('');
    const [catagory, setCatagory] = useState('');
    return(
        <div>
            <label>Student Name:</label>
            <input type="text" name="" id="" placeholder="Type Student Name" onChange={(e) => setName(e.target.value)}/>
            <label>Student Catagory:</label>
            <input type="text" name="" id="" placeholder="Type Student Catagory" onChange={(e) => setCatagory(e.target.value)}/>
            <hr>
            </hr>
            <h5>Student Info</h5>
            <p><strong>Student Name:</strong>{name}</p>
            <p><strong>Student Catagory:</strong>{catagory}</p>
        </div>
    );
}

export default StudentForm;