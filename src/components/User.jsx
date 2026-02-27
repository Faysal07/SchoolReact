import './User.css';

import { useEffect, useState } from "react";

function User() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        // API Calling Here
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))

        console.log("User Data", users)
    }, [])

    return (
        <div>
            <h2 className="">User Information</h2>
            {users.map(user => (
                <div key={user.id}>
                    <h3>User Name: {user.name}</h3>
                    <h3>User Email: {user.email}</h3>
                </div>
            ))}

        </div>
    )
}

export default User;