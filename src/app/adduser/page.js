"use client"
import React, { useState } from 'react';
import './../style.css';

export default function Page() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const addUser = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, age, email }),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            } else {
                console.error('Error adding user:', response.status);
            }
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className='add-user'>
            <h1>Add new user</h1>
            <input type='text' value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} className='input-field' />
            <input type='text' value={age} placeholder='Enter age' onChange={(e) => setAge(e.target.value)} className='input-field' />
            <input type='text' value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='input-field' />
            <button onClick={addUser} className='btn'>
                Add user
            </button>
        </div>
    );
}
