import './Student.css';

function Student(props){
    return(
        <div>
            <h2>Student Name: {props.name}</h2>
            <h3>Student Catagory: {props.catagory}</h3>
        </div>
    );
}

export default Student;