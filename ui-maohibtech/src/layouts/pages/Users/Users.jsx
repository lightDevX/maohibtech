// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadUsers = useLoaderData();

    const [users, setUser] = useState(loadUsers);

    const handleDeleteUser = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted Successfull');
                    const remaining = users.filter(user => user._id !== _id);
                    setUser(remaining);
                }
            })

    }


    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} <button
                        onClick={() => handleDeleteUser(user._id)}
                    >X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;