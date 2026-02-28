import './User.css';

import { useEffect, useState } from "react";

function User() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // API Calling Here
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
            // setLoading(false)

            setTimeout(() => {
                setLoading(false)
            }, 3000);
        })

        console.log("User Data", users)
    }, [])


    if (loading) {
        return(<h1>Please wait. Loading Data</h1>)
    }

    return (
        <div className='users'>
            <h2 className="">User Information</h2>
            {users.map(user => (
                <div key={user.id} className='user_box'>
                    <h3 className='user_title'>User Name: {user.name}</h3>
                    <h3 className='user_email'>User Email: {user.email}</h3>
                </div>
            ))}

        </div>
    )
}

export default User;