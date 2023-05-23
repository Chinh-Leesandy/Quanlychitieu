import React from "react";
import './assets/trans.css'
import { useState, useEffect } from "react";

function Trans() {
    const [transaction, setTransaction] = useState([]);
    const [totalIncome, setTotalIncome] = useState();
    const [totalExpense, setTotalExpense] = useState();
    useEffect (() => {
        fetch ("http://localhost:8080/transaction")
        .then((response) => response.json())
        .then((data) => setTransaction(data))
        .catch((err) => console.log(err));
    }, [])
    useEffect (() => {
        fetch ("http://localhost:8080/transaction/totalincome")
        .then((response) => response.json())
        .then((data) => setTotalIncome(data))
        .catch((err) => console.log(err));
    }, [])
    useEffect (() => {
        fetch ("http://localhost:8080/transaction/totalexpense")
        .then((response) => response.json())
        .then((data) => setTotalExpense(data))
        .catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <div class="container">
            <div class="day">
            </div>
            <div className="total d-flex ">
                <div className="totalIncome">
                    <span>Tổng chi phí chi tiêu: </span>
                    <input type="text" name="totalincome" id="totalincome" value={totalIncome}/>
                </div>
                <div className="totalExpense">
                    <span>Tổng thu nhập: </span>
                    <input type="text" name="totalexpense" id="totalexpense" value={totalExpense}/>
                </div>
            </div>
            <p></p>
            <div class="table-trans">
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Money</th>
                            <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {transaction.map((transaction) => (
                            <tr>
                                <td>{transaction.description}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.value}</td>
                                <td>{transaction.categoryName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default Trans;