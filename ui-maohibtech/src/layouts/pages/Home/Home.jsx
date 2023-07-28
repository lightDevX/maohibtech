/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Succesfully add user!!');
                    form.reset();
                }
            })
    }

    return (
        <div>
            <Link to='/users'>Users</Link>
            <h3>This is home</h3>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' id='' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Home;