import React from "react";
import './assets/trans.css'
import { useState, useEffect } from "react"; 

function Category() {
    const [category, setCategory] = useState([]);
    useEffect (() => {
        fetch ("http://localhost:8080/category")
        .then((response) => response.json())
        .then((data) => setCategory(data))
        .catch((err) => console.log(err));
    }, [])
    console.log(category);
    return (
        <div>
            <div class="container">
            <div class="day">
            </div>
            <div class="table-trans">
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((category) => (
                            <tr key = {category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>{category.typeName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default Category;