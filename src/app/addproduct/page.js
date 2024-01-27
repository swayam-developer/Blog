"use client"
import '../style.css'
import React, { useState } from 'react'

export default function Page() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");

    const addProduct = async () => {
        console.log(name, price, company, color, category)
        let result = await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            body: JSON.stringify({ name, price, company, color, category })
        });
        result = await result.json();
        if (result.success) {
            alert("New product added")
        }
    }
    return (
        <div>
            <h1>Add products</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" className="input" />
            <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" className="input" />
            <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter product company" className="input" />
            <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter product color" className="input" />
            <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter product category" className="input" />
            <button className="btn" onClick={addProduct}>Add product</button>
        </div>
    )
}